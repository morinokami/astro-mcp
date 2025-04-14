import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { createCache } from "async-cache-dedupe";
import type { McpServer } from "vite-plugin-mcp";
import { z } from "zod";

const cache = createCache({
	ttl: 5, // seconds
	stale: 5, // number of seconds to return data after ttl has expired
	storage: { type: "memory" },
});

const listAstroIntegrationsCache = cache.define(
	"list-astro-integrations",
	async (): Promise<CallToolResult> => {
		return {
			content: [{ type: "text", text: "No integrations found" }],
		};
	},
);

const getAstroIntegrationCache = cache.define(
	"get-astro-integration",
	async (integration: string): Promise<CallToolResult> => {
		return {
			content: [{ type: "text", text: "No integration found" }],
		};
	},
);

export async function listAstroIntegrations(mcpServer: McpServer) {
	mcpServer.tool(
		"list-astro-integrations",
		"List available Astro integrations.",
		{},
		async () => {
			return await listAstroIntegrationsCache["list-astro-integrations"]();
		},
	);
}

export async function getAstroIntegration(mcpServer: McpServer) {
	mcpServer.tool(
		"get-astro-integration",
		"Get information about an Astro integration.",
		{ integration: z.string() },
		async ({ integration }) => {
			return await getAstroIntegrationCache["get-astro-integration"](
				integration,
			);
		},
	);
}
