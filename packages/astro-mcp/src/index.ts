import type { AstroIntegration } from "astro";

export default function createAstroMcpIntegration(): AstroIntegration {
	return {
		name: "astro-mcp",
		hooks: {
			// biome-ignore lint/correctness/noUnusedVariables:
			"astro:server:setup": ({ server }) => {
				// TODO: Add MCP server setup
			},
		},
	};
}
