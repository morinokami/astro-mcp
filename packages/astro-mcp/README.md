# astro-mcp

MCP server to support Astro project development, inspired by [antfu](https://github.com/antfu)'s [nuxt-mcp](https://github.com/antfu/nuxt-mcp).

> [!IMPORTANT]
> This package is experimental and unstable. Proceed with caution when using it.

`astro-mcp` aims to help models understand your Astro project better, by providing them with information that cannot be easily accessed just by looking at the project files, such as:

- Runtime information about the Astro server
- Up-to-date Astro docs content
- Information about the Astro integrations you are using

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

import mcp from "astro-mcp";

export default defineConfig({
  integrations: [mcp()],
});
```

## Usage

After installing the integration, the MCP server will be available at `http://localhost:4321/__mcp/sse`.
You can use this URL to connect to the MCP server:

- If you are using VSCode, create an empty `.vscode/mcp.json` file in the root of your project. `astro-mcp` will automatically update this file when the Astro server starts.
- If you are using Cursor, create an empty `.cursor/mcp.json` file in the root of your project. `astro-mcp` will automatically update this file when the Astro server starts.

### Extending the MCP server

`astro-mcp` provides a hook called `mcp:setup` that other integrations can use to extend the MCP server. This is useful if you want to add custom tools to the MCP server.

```ts
export default function createExampleIntegration(): AstroIntegration {
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
```

## Tools

- `get-astro-config`: Get the Astro config
  - Parameters: None
- `list-astro-routes`: List all the routes in the Astro project. Optionally filter routes by type (redirect, page, endpoint, or fallback)
  - Parameters:
    - `type` (string, optional): `redirect`, `page`, `endpoint`, or `fallback`
- `get-astro-server-address`: Get the address, family, and port of the Astro server
  - Parameters: None
- `list-astro-integrations`: List available Astro integrations
  - Parameters: None
- `get-astro-integration`: Get information about an Astro integration
  - Parameters:
    - `name` (string): The name of the Astro integration
- `search-astro-docs`: Search the Astro documentation for specific topics, concepts, or features. Returns relevant documentation snippets that match your query
  - Parameters:
    - `query` (string): The query to search for

### Tools from `vite-plugin-mcp`

- `get-vite-config`: Get the Vite config digest, including the root, resolve, plugins, and environment names
  - Parameters: None
- `get-vite-module-info`: Get graph information of a module, including importers, imported modules, and compiled result
  - Parameters: None
