# Create your first Astro page

Now that you know that `.astro` files are responsible for pages on your website, it's time to create one!

> **🎯 Get Ready To**
>
> - Create two new pages on your website: About and Blog

## Create a new `.astro` file

1. In the files pane of your code editor, navigate to the folder `src/pages/` where you will see the existing file `index.astro`
2. In that same folder, create a new file named `about.astro`.
3. Copy, or retype the contents of `index.astro` into your new `about.astro` file.
   :::tip
   Your editor might show a solid white circle on the tab label for this file. This means that the file is not yet saved. Under the File menu in VS Code, enable "Auto Save" and you should no longer need to save any files manually.
   :::
4. Add `/about` to the end of your website preview's URL in the address bar and check that you can see a page load there. (e.g. `http://localhost:4321/about`)

Right now, your "About" page should look exactly the same as the first page, but we're going to change that!

## Edit your page

Edit the HTML content to make this page about you.

To change or add more content to your About page, add more HTML element tags containing content. You can copy and paste the HTML code below between the existing `<body></body>` tags, or create your own.

```astro title="src/pages/about.astro" ins={3-8} del={2}
<body>
  <h1>My Astro Site</h1>
  <h1>About Me</h1>
  <h2>... and my new Astro site!</h2>

  <p>I am working through Astro's introductory tutorial. This is the second page on my website, and it's the first one I built myself!</p>

  <p>This site will update as I complete more of the tutorial, so keep checking back and see how my journey is going!</p>
</body>
```

Now, visit your `/about` page in your browser tab again, and you should see your updated content.
