import type { IntegrationResolvedRoute } from "astro";
import type { McpServer } from "vite-plugin-mcp";

export async function listAstroRoutes(
	mcpServer: McpServer,
	routes: IntegrationResolvedRoute[],
) {
	mcpServer.tool(
		"list-astro-routes",
		"List all the routes in the Astro project",
		{},
		async () => {
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(routes),
					},
				],
			};
		},
	);
}
