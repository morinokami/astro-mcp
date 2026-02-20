> **🎯 Get Ready To**
>
> - Update your site with navigation links to this new Tags page

## Add this page to your navigation

Right now, you can navigate to `http://localhost:4321/tags` and see this page. From this page, you can click on links to your individual tag pages.

But, you still need to make these pages discoverable from other pages on your website.

1. In your `Navigation.astro` component, include a link to this new tag index page.

   ```astro title="src/components/Navigation.astro" ins={4}
   <a href="/">Home</a>
   <a href="/about/">About</a>
   <a href="/blog/">Blog</a>
   <a href="/tags/">Tags</a>
   ```
