import type { AddressInfo } from "node:net";
import type { McpServer } from "vite-plugin-mcp";

export function getAstroServerAddress(
	mcpServer: McpServer,
	address: AddressInfo,
) {
	mcpServer.tool(
		"get-astro-server-address",
		"Get the address, family, and port of the Astro server",
		{},
		async () => {
			return {
				content: [{ type: "text", text: JSON.stringify(address) }],
			};
		},
	);
}
