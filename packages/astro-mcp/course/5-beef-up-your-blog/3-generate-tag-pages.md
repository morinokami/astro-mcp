# Generate tag pages

> **🎯 Get Ready To**
>
> - Create a page to generate multiple pages

## Dynamic page routing

You can create entire sets of pages dynamically using `.astro` files that export a `getStaticPaths()` function.

## Create pages dynamically

1. Create a new file at `src/pages/tags/[tag].astro`. (You will have to create a new folder.) Notice that the file name (`[tag].astro`) uses square brackets. Paste the following code into the file:

   ```astro title="src/pages/tags/[tag].astro"
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro';

   export async function getStaticPaths() {
     return [
       { params: { tag: "astro" } },
       { params: { tag: "successes" } },
       { params: { tag: "community" } },
       { params: { tag: "blogging" } },
       { params: { tag: "setbacks" } },
       { params: { tag: "learning in public" } },
     ];
   }

   const { tag } = Astro.params;
   ---
   <BaseLayout pageTitle={tag}>
     <p>Posts tagged with {tag}</p>
   </BaseLayout>
   ```

   The `getStaticPaths` function returns an array of page routes, and all of the pages at those routes will use the same template defined in the file.

2. If you have customized your blog posts, then replace the individual tag values (e.g. "astro", "successes", "community", etc.) with the tags used in your own posts.

3. Make sure that every blog post contains at least one tag, written as an array, e.g. `tags: ["blogging"]`.

4. Visit `http://localhost:4321/tags/astro` in your browser preview and you should see a page, generated dynamically from `[tag].astro`. Check that you also have pages created for each of your tags at `/tags/successes`, `/tags/community`, and `/tags/learning%20in%20public`, etc., or at each of your custom tags. You may need to first quit and restart the dev server to see these new pages.
