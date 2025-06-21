import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import type { McpServer } from "vite-plugin-mcp";
import { z } from "zod";

type Status = "not-started" | "in-progress" | "completed";

type Lesson = {
	title: string;
	status: Status;
	steps: {
		title: string;
		status: Status;
	}[];
};

type CourseProgress = {
	currentLesson: number;
	lessons: Lesson[];
};

const courseDir = `${import.meta.dirname}/../course`;

const introPrompt = `This is a course designed to help users learn Astro, the web framework for building content-driven websites such as blogs, marketing sites, and e-commerce platforms.

The following is the introduction content, please provide this text to the user EXACTLY as written below. Do not provide any other text or instructions:

# Welcome to the Astro Course!

Thank you for starting the Astro course! This course will guide you through the basics of Astro, starting from the very beginning.

## ## How This Course Works

- Each lesson is broken into multiple steps
- I'll guide you through the code examples and explanations
- You can ask questions at any time
- If you ever leave and come back, use the \`startAstroCourse\` tool to pick up where you left off. Just ask to "start the Astro course".
- Use the \`nextAstroCourseStep\` tool to move to the next step when you're ready. Just ask to "move to the next step" when you are ready.
- Use the \`getAstroCourseProgress\` tool to check your progress. You can just ask "get my course progress".
- Use the \`clearAstroCourseHistory\` tool to reset your progress and start over. You can just ask "clear my course progress".

Type "next step" to start the course.`;

function wrapContent(content: string) {
	return `This is a course designed to help users learn Astro, the web framework for building content-driven websites such as blogs, marketing sites, and e-commerce platforms.

Guide users through each lesson by explaining the concepts and writing the initial code alongside them. The goal is to demonstrate how the code works while providing clear explanations throughout the learning process.

Each lesson consists of multiple steps. Present each step's content, then ask the user when they're ready to continue. When a step involves coding, write the code for them whenever possible, but always explain what the step accomplishes before implementing it.

Here is the content for this step:

<content>
${content}
</content>

Use the \`nextAstroCourseStep\` tool when you're ready to move to the next step.`;
}

async function saveCourseProgress(progress: CourseProgress) {
	await fs.writeFile(
		`${courseDir}/course-progress.json`,
		JSON.stringify(progress, null, 2),
	);
}

async function loadCourseProgress() {
	try {
		const progress = await fs.readFile(
			`${courseDir}/course-progress.json`,
			"utf-8",
		);
		return JSON.parse(progress) as CourseProgress;
	} catch (_) {
		return null;
	}
}

async function loadLessons() {
	const lessons = await fs.readFile(`${courseDir}/lessons.json`, "utf-8");
	return JSON.parse(lessons).lessons as Lesson[];
}

async function loadStepContent(lessonTitle: string, stepTitle: string) {
	try {
		const stepPath = `${courseDir}/${lessonTitle}/${stepTitle}.md`;
		const stepContent = await fs.readFile(stepPath, "utf-8");
		return stepContent;
	} catch (_) {
		return null;
	}
}

async function advanceStep(progress: CourseProgress) {
	// Find the last lesson that was in-progress
	const currentLesson = progress.lessons[progress.currentLesson];
	const currentStepIndex = currentLesson.steps.findLastIndex(
		(step) => step.status === "in-progress",
	);

	if (progress.currentLesson === 0 && currentStepIndex === -1) {
		// If this is the first lesson and no steps are in-progress, start the first step
		currentLesson.status = "in-progress";
		const nextStep = currentLesson.steps[0];
		nextStep.status = "in-progress";
		await saveCourseProgress(progress);

		const content = await loadStepContent(currentLesson.title, nextStep.title);
		if (content) {
			return {
				content: [{ type: "text" as const, text: wrapContent(content) }],
			};
		}
	}

	if (currentStepIndex !== -1) {
		if (currentStepIndex === currentLesson.steps.length - 1) {
			// Mark the last step as completed
			const currentStep = currentLesson.steps[currentStepIndex];
			currentStep.status = "completed";

			// Mark the lesson as completed
			currentLesson.status = "completed";

			// Find the next lesson and mark it as in-progress
			const nextLesson = progress.lessons[progress.currentLesson + 1];
			if (!nextLesson) {
				await saveCourseProgress(progress);
				// TODO: Return end of course message
				throw new Error("No more lessons available.");
			}
			progress.currentLesson++;
			nextLesson.status = "in-progress";

			// Set the first step of the next lesson as in-progress
			const nextStep = nextLesson.steps[0];
			nextStep.status = "in-progress";

			await saveCourseProgress(progress);

			const content = await loadStepContent(nextLesson.title, nextStep.title);
			if (content) {
				return {
					content: [{ type: "text" as const, text: wrapContent(content) }],
				};
			}
		} else {
			// Mark the last step as completed
			const lastStep = currentLesson.steps[currentStepIndex];
			lastStep.status = "completed";

			// Set the next step as in-progress
			const nextStep = currentLesson.steps[currentStepIndex + 1];
			nextStep.status = "in-progress";

			await saveCourseProgress(progress);

			const content = await loadStepContent(
				currentLesson.title,
				nextStep.title,
			);
			if (content) {
				return {
					content: [{ type: "text" as const, text: wrapContent(content) }],
				};
			}
		}
	}

	throw new Error("TODO: No in-progress steps found.");
}

export async function startAstroCourse(mcpServer: McpServer) {
	mcpServer.tool(
		"start-astro-course",
		"Start the Astro course. If the user has no progress, start from the beginning. If the user has progress, resume from the last lesson.",
		{},
		async () => {
			try {
				const lessons = await loadLessons();
				const progress = await loadCourseProgress();

				if (progress) {
					const currentLesson = progress.lessons[progress.currentLesson];
					const currentStepIndex = currentLesson.steps.findLastIndex(
						(step) => step.status === "in-progress",
					);

					const content = await loadStepContent(
						currentLesson.title,
						currentLesson.steps[currentStepIndex].title,
					);

					if (content) {
						return { content: [{ type: "text", text: wrapContent(content) }] };
					}

					return {
						content: [
							{
								type: "text",
								text: "Use the `nextAstroCourseStep` tool to resume the course.",
							},
						],
					};
				}

				await saveCourseProgress({
					currentLesson: 0,
					lessons,
				});
				return { content: [{ type: "text", text: introPrompt }] };
			} catch (error) {
				return {
					content: [
						{
							type: "text",
							text: `Error starting the course: ${error instanceof Error ? error.message : String(error)}`,
						},
					],
				};
			}
		},
	);
}

export async function nextAstroCourseStep(mcpServer: McpServer) {
	mcpServer.tool(
		"next-astro-course-step",
		"Proceed to the next step in the Astro course.",
		{},
		async () => {
			try {
				const progress = await loadCourseProgress();

				if (progress) {
					return await advanceStep(progress);
				}

				return {
					content: [
						{
							type: "text",
							text: "Use the `startAstroCourse` tool to start the course.",
						},
					],
				};
			} catch (error) {
				return {
					content: [
						{
							type: "text",
							text: `Error starting the course: ${error instanceof Error ? error.message : String(error)}`,
						},
					],
				};
			}
		},
	);
}

export async function getAstroCourseProgress(mcpServer: McpServer) {
	mcpServer.tool(
		"get-astro-course-progress",
		"Get the current progress of the Astro course.",
		{},
		async () => {
			try {
				const progress = await loadCourseProgress();

				if (!progress) {
					return {
						content: [{ type: "text", text: "No course progress found." }],
					};
				}

				let progressReport = "# Astro Course Progress\n\n";

				const totalLessons = progress.lessons.length;
				const completedLessons = progress.lessons.filter(
					(lesson) => lesson.status === "completed",
				).length;
				const completedSteps = progress.lessons.reduce((acc, lesson) => {
					return (
						acc +
						lesson.steps.filter((step) => step.status === "completed").length
					);
				}, 0);
				const totalSteps = progress.lessons.reduce((acc, lesson) => {
					return acc + lesson.steps.length;
				}, 0);
				progressReport += `- Current Lesson: ${progress.lessons[progress.currentLesson].title}\n`;
				progressReport += `- Lessons Completed: ${completedLessons} / ${totalLessons}\n`;
				progressReport += `- Steps Completed: ${completedSteps} / ${totalSteps}\n\n`;

				progressReport += "## Lessons\n\n";
				for (const lesson of progress.lessons) {
					progressReport += `### ${lesson.status === "completed" ? "✅" : "🚧"} ${lesson.title}\n\n`;
					for (const step of lesson.steps) {
						progressReport += `- ${step.status === "completed" ? "✅" : "🚧"} ${step.title}\n`;
					}
					progressReport += "\n";
				}

				progressReport += "## Navigation\n\n";
				progressReport += "- To continue the course: `nextAstroCourseStep`\n";
				progressReport += "- To reset progress: `clearAstroCourseHistory`\n";

				return { content: [{ type: "text", text: progressReport }] };
			} catch (error) {
				return {
					content: [
						{
							type: "text",
							text: `Error getting course progress: ${error instanceof Error ? error.message : String(error)}`,
						},
					],
				};
			}
		},
	);
}

export async function clearAstroCourseProgress(mcpServer: McpServer) {
	mcpServer.tool(
		"clear-astro-course-progress",
		"Clear the progress of the Astro course.",
		{
			confirm: z.boolean().describe("Confirm clearing the course progress."),
		},
		async ({ confirm }) => {
			try {
				if (!confirm) {
					return {
						content: [
							{
								type: "text",
								text: "Are you sure you want to clear the course progress? This action cannot be undone.",
							},
						],
					};
				}

				if (!existsSync(`${courseDir}/course-progress.json`)) {
					return {
						content: [{ type: "text", text: "No course progress found." }],
					};
				}

				await fs.unlink(`${courseDir}/course-progress.json`);

				return {
					content: [
						{
							type: "text",
							text: "Course progress has been cleared. Use the `startAstroCourse` tool to restart the course from the beginning.",
						},
					],
				};
			} catch (error) {
				return {
					content: [
						{
							type: "text",
							text: `Error clearing course progress: ${error instanceof Error ? error.message : String(error)}`,
						},
					],
				};
			}
		},
	);
}
