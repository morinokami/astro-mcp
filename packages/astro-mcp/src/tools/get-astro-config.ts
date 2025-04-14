import type { AstroConfig } from "astro";
import type { McpServer } from "vite-plugin-mcp";

export async function getAstroConfig(
	mcpServer: McpServer,
	config: AstroConfig,
) {
	mcpServer.tool("get-astro-config", "Get the Astro config.", {}, async () => {
		return {
			content: [
				{
					type: "text",
					text: JSON.stringify(config, null, 2),
				},
			],
		};
	});
}
