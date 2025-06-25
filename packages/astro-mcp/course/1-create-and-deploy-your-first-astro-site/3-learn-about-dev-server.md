# Learn about the development server that's already running

> **🎯 Get Ready To**
>
> - Learn about the development server that's already running

## About your development environment

### The development server

Your Astro project is currently running in development (dev) mode. This server provides live preview capabilities.

<details>
<summary>How the dev server works</summary>

The development server runs using one of these commands:

- **npm**: `npm run dev`
- **pnpm**: `pnpm run dev`
- **yarn**: `yarn run dev`

This server:

- Runs on `http://localhost:4321` by default
- Watches your files for changes
- Automatically reloads your browser when you save
- Provides helpful error messages during development
</details>

> **💡 Using the Astro dev server**
>
> While the Astro server is running in dev mode, you will NOT be able to run commands in your terminal window. Instead, this pane will give you feedback as you preview your site.
>
> You can stop the dev server at any time and return to the command prompt by typing <kbd>Ctrl + C</kbd> in the terminal.
>
> Sometimes the dev server will stop on its own while you are working. If your live preview stops working, go back to the terminal and restart the dev server by typing `npm run dev`.
