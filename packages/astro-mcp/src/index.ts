import type { AddressInfo } from "node:net";
import type {
	AstroConfig,
	AstroIntegration,
	IntegrationResolvedRoute,
} from "astro";
import { type McpServer, ViteMcp } from "vite-plugin-mcp";

import { version } from "../package.json";
import { getAstroConfig } from "./tools/get-astro-config";
import { getAstroServerAddress } from "./tools/get-astro-server-address";
import {
	getAstroIntegration,
	listAstroIntegrations,
} from "./tools/list-astro-integrations";
import { listAstroRoutes } from "./tools/list-astro-routes";
import { searchAstroDocs } from "./tools/search-astro-docs";

const INTEGRATION_NAME = "astro-mcp";
const SERVER_NAME = "astro";

export default function createAstroMcpIntegration(): AstroIntegration {
	const astroConfig = {} as AstroConfig;
	const astroRoutes: IntegrationResolvedRoute[] = [];
	const astroServerAddress = {} as AddressInfo;
	let mcp: McpServer | undefined = undefined;

	return {
		name: INTEGRATION_NAME,
		hooks: {
			"astro:config:setup": ({ command, config, logger, updateConfig }) => {
				if (command === "dev") {
					logger.info("Starting Astro MCP server");
					Object.assign(astroConfig, config);
					updateConfig({
						vite: {
							plugins: [
								ViteMcp({
									printUrl: false,
									port: config.server.port,
									updateConfig: "auto",
									mcpServerInfo: {
										name: SERVER_NAME,
										version,
									},
									async mcpServerSetup(mcpServer, _viteServer) {
										mcp = mcpServer;
										getAstroConfig(mcpServer, astroConfig);
										listAstroRoutes(mcpServer, astroRoutes);
										getAstroServerAddress(mcpServer, astroServerAddress);
										listAstroIntegrations(mcpServer);
										getAstroIntegration(mcpServer);
										searchAstroDocs(mcpServer);
									},
								}),
							],
						},
					});
				}
			},
			"astro:routes:resolved": ({ routes }) => {
				astroRoutes.push(...routes);
			},
			"astro:config:done": ({ config }) => {
				Object.assign(astroConfig, config);
			},
			"astro:server:start": ({ address, logger }) => {
				Object.assign(astroServerAddress, address);
				const protocol = astroConfig.vite.server?.https ? "https" : "http";
				const host = address.family === "IPv4" ? address.address : "localhost";
				const port = address.port;
				logger.info(
					`Astro MCP server is running at ${protocol}://${host}:${port}/__mcp/sse`,
				);

				const { integrations } = astroConfig;
				for (const integration of integrations) {
					const { hooks } = integration;
					if (mcp && hooks["mcp:setup"]) {
						hooks["mcp:setup"]({ mcp });
					}
				}
			},
		},
	};
}

declare global {
	namespace Astro {
		export interface IntegrationHooks {
			"mcp:setup"?: (options: {
				mcp: McpServer;
			}) => void | Promise<void>;
		}
	}
}
