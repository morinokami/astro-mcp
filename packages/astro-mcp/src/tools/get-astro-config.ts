import type { AstroConfig } from "astro";
import type { McpServer } from "vite-plugin-mcp";

export async function getAstroConfig(
	mcpServer: McpServer,
	config: AstroConfig,
) {
	mcpServer.tool(
		"get-astro-config",
		"Get the Astro config object containing comprehensive project settings including file paths (root, src, public, output directories), site URL, build options, server settings, enabled integrations, markdown processing configuration, image handling, Vite plugins, security settings, and experimental features.",
		{},
		async () => {
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(config, null, 2),
					},
				],
			};
		},
	);
}
