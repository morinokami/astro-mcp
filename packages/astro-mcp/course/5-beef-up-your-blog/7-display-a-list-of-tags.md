> **🎯 Get Ready To**
>
> - Display a list of all your unique tags, linking to each tag page

## Create an array of tags

You have previously displayed items in a list from an array using `map()`. What would it look like to define an array of all your tags, then display them in a list on this page?

```astro title="src/pages/tags/index.astro"
---
import BaseLayout from '../../layouts/BaseLayout.astro';
const tags = ['astro', 'blogging', 'learning in public', 'successes', 'setbacks', 'community']
const pageTitle = "Tag Index";
---
<BaseLayout pageTitle={pageTitle}>
  <ul>
    {tags.map((tag) => <li>{tag}</li>)}
  </ul>
</BaseLayout>
```

You could do this, but then you would need to come back to this file and update your array every time you use a new tag in a future blog post.

Fortunately, you already know a way to grab the data from all your Markdown files in one line of code, then return a list of all your tags.

1. In `src/pages/tags/index.astro`, add the line of code to the frontmatter script that will give your page access to the data from every `.md` blog post file.

   ```astro title = "src/pages/tags/index.astro" ins={3}
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro';
   const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));
   const pageTitle = "Tag Index";
   ---
   ```

2. Next, add the following line of JavaScript to your page component. This is the same code relying on Astro's built-in TypeScript support you used in `src/pages/tags/[tag].astro` to return a list of unique tags.

   ```astro title = "src/pages/tags/index.astro" ins={4}
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro';
   const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));
   const tags = [...new Set(allPosts.map((post: any) => post.frontmatter.tags).flat())];
   const pageTitle = "Tag Index";
   ---

   ```

## Create your list of tags

Instead of creating items in an unordered list this time, create one `<p>` for each item, inside a `<div>`. The pattern should look familiar!

1. Add the following code to your component template:

   ```astro title="src/pages/tags/index.astro" ins={2}
   <BaseLayout pageTitle={pageTitle}>
     <div>{tags.map((tag) => <p>{tag}</p>)}</div>
   </BaseLayout>
   ```

   In your browser preview, verify that you can see your tags listed. If any blog posts are missing tags, or they are improperly formatted, Astro's built-in TypeScript support will show you errors so you can check and correct your code.

2. To make each tag link to its own page, add the following `<a>` link to each tag name:

   ```astro title="src/pages/tags/index.astro" '/tags/${tag}'
   <BaseLayout pageTitle={pageTitle}>
     <div>
       {tags.map((tag) => (
         <p><a href={`/tags/${tag}`}>{tag}</a></p>
       ))}
     </div>
   </BaseLayout>
   ```

## Add styles to your tag list

1. Add the following CSS classes to style both your `<div>` and each `<p>` that will be generated. Note: Astro uses HTML syntax for adding class names!

   ```astro title="src/pages/tags/index.astro" 'class="tags"' 'class="tag"'
   <BaseLayout pageTitle={pageTitle}>
     <div class="tags">
       {tags.map((tag) => (
         <p class="tag"><a href={`/tags/${tag}`}>{tag}</a></p>
       ))}
     </div>
   </BaseLayout>
   ```

2. Define these new CSS classes by adding the following `<style>` tag to this page:

   ```astro title="src/pages/tags/index.astro"
   <style>
     a {
       color: #00539F;
     }

     .tags {
       display: flex;
       flex-wrap: wrap;
     }

     .tag {
       margin: 0.25em;
       border: dotted 1px #a1a1a1;
       border-radius: .5em;
       padding: .5em 1em;
       font-size: 1.15em;
       background-color: #F8FCFD;
     }
   </style>
   ```

3. Check your browser preview at `http://localhost:4321/tags` to verify that you have some new styles and that each of the tags on the page has a working link to its own individual tag page.

### Code Check-In

Here is what your new page should look like:

```astro title="src/pages/tags/index.astro"
---
import BaseLayout from '../../layouts/BaseLayout.astro';
const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));
const tags = [...new Set(allPosts.map((post: any) => post.frontmatter.tags).flat())];
const pageTitle = "Tag Index";
---
<BaseLayout pageTitle={pageTitle}>
  <div class="tags">
    {tags.map((tag) => (
      <p class="tag"><a href={`/tags/${tag}`}>{tag}</a></p>
    ))}
  </div>
</BaseLayout>
<style>
  a {
    color: #00539F;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
  }

  .tag {
    margin: 0.25em;
    border: dotted 1px #a1a1a1;
    border-radius: .5em;
    padding: .5em 1em;
    font-size: 1.15em;
    background-color: #F8FCFD;
  }
</style>
```
