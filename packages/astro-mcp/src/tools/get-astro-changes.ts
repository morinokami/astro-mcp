import { createCache } from "async-cache-dedupe";
import type { McpServer } from "vite-plugin-mcp";
import { z } from "zod";

const ASTRO_PACKAGES = {
	"@astrojs/prism": "astro-prism",
	"@astrojs/rss": "astro-rss",
	astro: "astro",
	"create-astro": "create-astro",
	"@astrojs/db": "db",
	"@astrojs/upgrade": "upgrade",
	// integrations
	"@astrojs/alpinejs": "integrations/alpinejs",
	"@astrojs/cloudflare": "integrations/cloudflare",
	"@astrojs/markdoc": "integrations/markdoc",
	"@astrojs/mdx": "integrations/mdx",
	"@astrojs/netlify": "integrations/netlify",
	"@astrojs/node": "integrations/node",
	"@astrojs/partytown": "integrations/partytown",
	"@astrojs/preact": "integrations/preact",
	"@astrojs/react": "integrations/react",
	"@astrojs/sitemap": "integrations/sitemap",
	"@astrojs/solid-js": "integrations/solid",
	"@astrojs/svelte": "integrations/svelte",
	"@astrojs/vercel": "integrations/vercel",
	"@astrojs/vue": "integrations/vue",
} as const;
const MAX_LINES = 300;

const cache = createCache({
	ttl: 60 * 60 * 12, // 12 hours
	stale: 60 * 60 * 12, // 12 hours
	storage: { type: "memory" },
});

const getAstroChangesCache = cache.define(
	"get-astro-changes",
	async (packageName: keyof typeof ASTRO_PACKAGES) => {
		const response = await fetch(
			`https://raw.githubusercontent.com/withastro/astro/refs/heads/main/packages/${ASTRO_PACKAGES[packageName]}/CHANGELOG.md`,
		);
		return await response.text();
	},
);

function truncateContent(
	content: string,
	maxLines: number,
	changelogUrl: string,
): string {
	const lines = content.split("\n");
	if (lines.length <= maxLines) {
		return content;
	}

	const visibleLines = lines.slice(0, maxLines);
	const hiddenCount = lines.length - maxLines;
	return `${visibleLines.join("\n")}

... ${hiddenCount} more lines hidden. See full changelog at ${changelogUrl}.`;
}

export async function getAstroChanges(mcpServer: McpServer) {
	mcpServer.tool(
		"get-astro-changes",
		`Get the changelog of the Astro-related packages.

Available packages:
${Object.entries(ASTRO_PACKAGES)
	.map(([pkg, _name]) => `- ${pkg}`)
	.join("\n")}
`,
		{
			packageName: z
				.enum(Object.keys(ASTRO_PACKAGES) as [keyof typeof ASTRO_PACKAGES])
				.describe(
					"The name of the Astro-related package to get the changelog for",
				),
		},
		async ({ packageName }) => {
			const changelog =
				await getAstroChangesCache["get-astro-changes"](packageName);
			return {
				content: [
					{
						type: "text",
						text: truncateContent(
							changelog,
							MAX_LINES,
							`https://github.com/withastro/astro/blob/refs/heads/main/packages/${ASTRO_PACKAGES[packageName]}/CHANGELOG.md`,
						),
					},
				],
			};
		},
	);
}
