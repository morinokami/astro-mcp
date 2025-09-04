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

After installing the integration, the MCP server will be available at http://localhost:4321/\_\_mcp/sse. To connect, create an empty configuration file in the appropriate location for your editor or tool:

| Editor/Tool | Configuration File                    |
| ----------- | ------------------------------------- |
| VSCode      | `.vscode/mcp.json`                    |
| Cursor      | `.cursor/mcp.json`                    |
| Windsurf    | `~/.codeium/windsurf/mcp_config.json` |
| Claude Code | `.mcp.json`                           |

`astro-mcp` will automatically update the file when the Astro server starts.

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

- `get-astro-config`: Get the Astro config object containing comprehensive project settings including file paths (root, src, public, output directories), site URL, build options, server settings, enabled integrations, markdown processing configuration, image handling, Vite plugins, security settings, and experimental features
  - Parameters: None
- `list-astro-routes`: List detailed routing information from your Astro project, including all routes with their file entrypoints, URL patterns, dynamic parameters, pre-rendering status, and route types. Optionally filter by type to focus on specific route categories
  - Parameters:
    - `type` (string, optional): `redirect`, `page`, `endpoint`, or `fallback`
- `get-astro-server-address`: Get the current network address, IP protocol family, and port number of the running Astro development server
  - Parameters: None
- `list-astro-integrations`: List all Astro integrations available in the ecosystem
  - Parameters: None
- `get-astro-integration`: Get detailed metadata about a specific Astro integration, including its name, description, categories, repository links, npm information, related website links, official status, and download statistics
  - Parameters:
    - `name` (string): The name of the Astro integration to get information about
- `search-astro-docs`: Search the Astro documentation for specific topics, concepts, or features. Returns relevant documentation snippets that match your query
  - Parameters:
    - `query` (string): The query to search for
- `get-astro-changes`: Get the changelog of the Astro-related packages
  - Parameters:
    - `packageName` (string): The name of the Astro-related package to get the changelog for

### Tools from `vite-plugin-mcp`

- `get-vite-config`: Get the Vite config digest, including the root, resolve, plugins, and environment names
  - Parameters: None
- `get-vite-module-info`: Get graph information of a module, including importers, imported modules, and compiled result
  - Parameters:
    - `filepath` (string): The absolute filepath of the module

## Course

`astro-mcp` also provides a course to help you learn Astro. To get started, create a new Astro project with the `create astro` command:

1. Run `npm create astro@latest`
2. When the prompt asks you where to create the project, type in the name of your project
3. When the prompt asks you to select a template, choose the minimal (empty) template
4. When the prompt asks you whether or not to install dependencies, enter `y`
5. When the prompt asks you whether or not to initialize a new git repository, enter `y`

After the project is created, `cd` into the project directory and run `npx astro add astro-mcp` to install the `astro-mcp` package. Then, create a new MCP configuration file in the appropriate location for your editor or tool following the instructions in the [Usage](#usage) section. Finally, start the Astro dev server by running `npm run dev`.

That's it! You can now start the course by typing `start astro course` in the chat interface of your favorite MCP client like Cursor or Claude Code.
