import type { AstroConfig } from "astro";
import type { McpServer } from "vite-plugin-mcp";

export async function getAstroConfig(
	mcpServer: McpServer,
	config: AstroConfig,
) {
	mcpServer.tool(
		"get-astro-config",
		"Get the Astro configuration",
		{},
		async () => {
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(config),
					},
				],
			};
		},
	);
}
