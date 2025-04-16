import type { McpServer } from "vite-plugin-mcp";
import { z } from "zod";

interface DocContent {
	id: string;
	type: string;
	text: string;
}

interface DocAttributes {
	timestamp: number;
	folder: string;
}

interface DocResult {
	file_id: string;
	filename: string;
	score: number;
	attributes: DocAttributes;
	content: DocContent[];
}

interface SearchResponse {
	docs: DocResult[];
}

export async function searchAstroDocs(mcpServer: McpServer) {
	mcpServer.tool(
		"search-astro-docs",
		"Search the Astro documentation for specific topics, concepts, or features. Returns relevant documentation snippets that match your query.",
		{ query: z.string().describe("The query to search for") },
		async ({ query }) => {
			const response = await fetch(
				"https://astro-docs-search.shf0811.workers.dev",
				{
					method: "POST",
					body: JSON.stringify({ query }),
				},
			);

			const data = (await response.json()) as SearchResponse;

			return {
				content: data.docs.map((doc) => ({
					type: "text",
					text: doc.content.map((c) => c.text).join("\n"),
				})),
			};
		},
	);
}
