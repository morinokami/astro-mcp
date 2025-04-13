import type { AstroIntegration, IntegrationResolvedRoute } from "astro";
import { ViteMcp } from "vite-plugin-mcp";

import { version } from "../package.json";
import { getAstroConfig } from "./tools/get-astro-config";
import { listAstroRoutes } from "./tools/list-astro-routes";

const INTEGRATION_NAME = "astro-mcp";
const SERVER_NAME = "astro";

interface AstroMcpOptions {
	updateCursorMcpJson: boolean;
	updateVSCodeMcpJson: boolean;
}

export default function createAstroMcpIntegration(
	options: AstroMcpOptions = {
		updateCursorMcpJson: true,
		updateVSCodeMcpJson: true,
	},
): AstroIntegration {
	const astroRoutes: IntegrationResolvedRoute[] = [];

	return {
		name: INTEGRATION_NAME,
		hooks: {
			"astro:config:setup": ({ command, config, logger, updateConfig }) => {
				if (command === "dev") {
					logger.info("Starting Astro MCP server");
					updateConfig({
						vite: {
							plugins: [
								ViteMcp({
									printUrl: false,
									port: config.server.port,
									updateCursorMcpJson: {
										enabled: options.updateCursorMcpJson,
										serverName: SERVER_NAME,
									},
									mcpServerInfo: {
										name: SERVER_NAME,
										version,
									},
									async mcpServerSetup(mcpServer, _viteServer) {
										getAstroConfig(mcpServer, config);
										listAstroRoutes(mcpServer, astroRoutes);
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
		},
	};
}
