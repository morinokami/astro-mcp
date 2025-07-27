# Add navigation links to your page

> **🎯 Get Ready To**
>
> - Add navigation links to your pages

## Add navigation links

To make it easier to preview all your pages, add HTML page navigation links before your `<h1>` at the top of both of your pages (`index.astro` and `about.astro`):

```astro title="src/pages/about.astro" ins={1-2}
<a href="/">Home</a>
<a href="/about/">About</a>

<h1>About Me</h1>
<h2>... and my new Astro site!</h2>
```

Check that you can click these links to move back and forth between pages on your site.

:::note
Unlike many frameworks, Astro uses standard HTML `<a>` elements to navigate between pages (also called _routes_), with traditional page refreshes.
:::

## Try it yourself - Add a Blog page

Add a third page `blog.astro` to your site, following the [same steps as above](#create-a-new-astro-file).

(Don't forget to add a third navigation link to every page.)

<details>
<summary>Show me the steps.</summary>

1. Create a new file at `src/pages/blog.astro`.
2. Copy the entire contents of `index.astro` and paste them into `blog.astro`.
3. [Add a third navigation link](#add-navigation-links) to the top of every page:

```astro title="src/pages/index.astro" ins={4}
<body>
  <a href="/">Home</a>
  <a href="/about/">About</a>
  <a href="/blog/">Blog</a>

  <h1>My Astro Site</h1>
</body>
```

</details>

You should now have a website with three pages that all link to each other. It's time to add some content to the Blog page.

Update the page content at `blog.astro` with:

```astro title="src/pages/blog.astro" ins={7-8} del={6}
<body>
  <a href="/">Home</a>
  <a href="/about/">About</a>
  <a href="/blog/">Blog</a>

  <h1>My Astro Site</h1>
  <h1>My Astro Learning Blog</h1>
  <p>This is where I will post about my journey learning Astro.</p>
</body>
```

Preview your entire site by visiting all three pages in your browser preview and check that:

- Every page correctly links to all three pages
- Your two new pages each have their own descriptive heading
- Your two new pages each have their own paragraph text
