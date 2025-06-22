# Write your first line of Astro

<GetReadyTo>
  - Make your first edit to your new website
</GetReadyTo>

## Edit your home page

1. In your code editor, navigate in the Explorer file pane to `src/pages/index.astro` and click on it to open the file's contents in an editable tab.

   The contents of your `index.astro` file should look like this:

   ```astro title="src/pages/index.astro"
   ---
   ---

   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
       <meta name="viewport" content="width=device-width" />
       <meta name="generator" content={Astro.generator} >
       <title>Astro</title>
     </head>
     <body>
       <h1>Astro</h1>
     </body>
   </html>
   ```

2. Edit the content of your page `<body>`.

   Type in the editor to change the heading text on your page and save the change.

   ```astro title="src/pages/index.astro" del={2} ins={3}
   <body>
     <h1>Astro</h1>
     <h1>My Astro Site</h1>
   </body>
   ```

3. Check the browser preview and you should see your page content updated to the new text.

Congratulations! You are now an Astro developer!

The rest of this unit will set you up for success with version control and a published website you can show off.
