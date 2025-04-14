# astro-mcp

MCP server to support Astro project development, inspired by [antfu](https://github.com/antfu)'s [nuxt-mcp](https://github.com/antfu/nuxt-mcp).

> [!IMPORTANT]
> This package is experimental and unstable. Proceed with caution when using it.

## Installation

In your Astro project directory, run the following command:

```sh
npx astro add astro-mcp
```

### Manual installation

First, install the `astro-mcp` package:

```sh
npm install astro-mcp
```

Then, add the `astro-mcp` integration to your Astro config:

```ts
import { defineConfig } from "astro/config";

import astroMcp from "astro-mcp";

export default defineConfig({
  integrations: [astroMcp()],
});
```

## Usage

After installing the integration, the MCP server will be available at `http://localhost:4321/__mcp/sse`.
You can use this URL to connect to the MCP server:

- If you are using VSCode, create an empty `.vscode/mcp.json` file in the root of your project. `astro-mcp` will automatically update this file when the Astro server starts.
- If you are using Cursor, create an empty `.cursor/mcp.json` file in the root of your project. `astro-mcp` will automatically update this file when the Astro server starts.

## Tools

- `get-astro-config`: Get the Astro config
  - Parameters: None
- `list-astro-routes`: List all the routes in the Astro project. Optionally filter routes by type (redirect, page, endpoint, or fallback)
  - Parameters:
    - `type` (string, optional): `redirect`, `page`, `endpoint`, or `fallback`
- `get-astro-server-address`: Get the address, family, and port of the Astro server
  - Parameters: None

### Tools from `vite-plugin-mcp`

- `get-vite-config`: Get the Vite config digest, including the root, resolve, plugins, and environment names
  - Parameters: None
- `get-vite-module-info`: Get graph information of a module, including importers, imported modules, and compiled result
  - Parameters: None
