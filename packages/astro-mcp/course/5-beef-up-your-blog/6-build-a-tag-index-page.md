# Build a tag index page

Now that you have individual pages for every tag, it's time to make links to them.

> **🎯 Get Ready To**
>
> - Add a new page using the /pages/folder/index.astro routing pattern

## Use the `/pages/folder/index.astro` routing pattern

To add a Tag Index page to your website, you could create a new file at `src/pages/tags.astro`.

But, since you already have the directory `/tags/`, you can take advantage of another routing pattern in Astro, and keep all your files related to tags together.

## Try it yourself - Make a Tag Index page

1. Create a new file `index.astro` in the directory `src/pages/tags/`.

2. Navigate to `http://localhost:4321/tags` and verify that your site now contains a page at this URL. It will be empty, but it will exist.

3. Create a minimal page at `src/pages/tags/index.astro` that uses your layout. You have done this before!

   1. Create a new page component in `src/pages/tags/`.

      ```
      index.astro
      ```

   2. Import and use your `<BaseLayout>`.

      ```astro title=" src/pages/tags/index.astro"
      ---
      import BaseLayout from '../../layouts/BaseLayout.astro';
      ---
      <BaseLayout></BaseLayout>
      ```

   3. Define a page title, and pass it to your layout as a component attribute.

      ```astro title="src/pages/tags/index.astro" ins={3} "pageTitle"
      ---
      import BaseLayout from '../../layouts/BaseLayout.astro';
      const pageTitle = "Tag Index";
      ---
      <BaseLayout pageTitle={pageTitle}></BaseLayout>
      ```

4. Check your browser preview again and you should have a formatted page, ready to add content to!
