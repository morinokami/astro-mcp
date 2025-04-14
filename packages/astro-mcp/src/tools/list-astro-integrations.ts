import { createCache } from "async-cache-dedupe";
import type { McpServer } from "vite-plugin-mcp";
import { z } from "zod";

interface AstroIntegration {
	name: string;
	title: string;
	description: string;
	image: string;
	categories: string[];
	repoUrl: string;
	npmUrl: string;
	homepageUrl: string;
	official: boolean;
	downloads: number;
	downloadFactor: number;
}

const cache = createCache({
	ttl: 60 * 60 * 12, // 12 hours
	stale: 60 * 60 * 12, // 12 hours
	storage: { type: "memory" },
});

const listAstroIntegrationsCache = cache.define(
	"list-astro-integrations",
	async () => {
		const repsonse = await fetch(
			"https://astro.build/api/v1/integrations/?limit=10000",
		);
		return (await repsonse.json()).data as AstroIntegration[];
	},
);

export async function listAstroIntegrations(mcpServer: McpServer) {
	mcpServer.tool(
		"list-astro-integrations",
		"List available Astro integrations.",
		{},
		async () => {
			const integrations =
				await listAstroIntegrationsCache["list-astro-integrations"]();
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(
							integrations.map((integration) => integration.name),
						),
					},
				],
			};
		},
	);
}

export async function getAstroIntegration(mcpServer: McpServer) {
	mcpServer.tool(
		"get-astro-integration",
		"Get information about an Astro integration.",
		{ integrationName: z.string() },
		async ({ integrationName }) => {
			const integrations =
				await listAstroIntegrationsCache["list-astro-integrations"]();
			const integration = integrations.find(
				(integration) => integration.name === integrationName,
			);
			return {
				content: [
					{
						type: "text",
						text: integration
							? JSON.stringify(integration, null, 2)
							: "Not found",
					},
				],
			};
		},
	);
}
