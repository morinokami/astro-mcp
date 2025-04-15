import type { IntegrationResolvedRoute } from "astro";
import type { McpServer } from "vite-plugin-mcp";
import { z } from "zod";

export async function listAstroRoutes(
	mcpServer: McpServer,
	routes: IntegrationResolvedRoute[],
) {
	mcpServer.tool(
		"list-astro-routes",
		"List all the routes in the Astro project. Optionally filter routes by type (redirect, page, endpoint, or fallback).",
		{
			type: z
				.enum(["redirect", "page", "endpoint", "fallback"])
				.optional()
				.describe(
					"Type of routes to list (redirect, page, endpoint, or fallback)",
				),
		},
		async ({ type }) => {
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(
							routes.filter((route) => (type ? route.type === type : true)),
							null,
							2,
						),
					},
				],
			};
		},
	);
}
