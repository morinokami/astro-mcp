import type { AddressInfo } from "node:net";
import type { McpServer } from "vite-plugin-mcp";

export function getAstroServerAddress(
	mcpServer: McpServer,
	address: AddressInfo,
) {
	mcpServer.tool(
		"get-astro-server-address",
		"Get the current network address, IP protocol family, and port number of the running Astro development server.",
		{},
		async () => {
			return {
				content: [{ type: "text", text: JSON.stringify(address, null, 2) }],
			};
		},
	);
}
