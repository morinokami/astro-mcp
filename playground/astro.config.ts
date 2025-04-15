import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import type { AstroIntegration } from "astro";
import astroMcp from "astro-mcp";
import { defineConfig } from "astro/config";
import { z } from "zod";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [mdx(), sitemap(), astroMcp(), createExampleIntegration()],
});

function createExampleIntegration(): AstroIntegration {
	return {
		name: "example-integration",
		hooks: {
			"mcp:setup": async ({ mcp }) => {
				mcp.tool("add", { a: z.number(), b: z.number() }, async ({ a, b }) => ({
					content: [{ type: "text", text: String(a + b) }],
				}));
			},
		},
	};
}
