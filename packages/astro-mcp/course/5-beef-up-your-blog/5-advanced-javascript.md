# Advanced JavaScript: Generate pages from existing tags

Your tag pages are now defined statically in `[tag].astro`. If you add a new tag to a blog post, you will also have to revisit this page and update your page routes.

The following example shows how to replace your code on this page with code that will automatically look for, and generate pages for, each tag used on your blog pages.

:::note
Even if it looks challenging, you can try following along with the steps to build this function yourself! If you don't want to walk through the JavaScript required right now, you can skip ahead to the [finished version of the code](#final-code-sample) and use it directly in your project, replacing the existing content.
:::

1. Check that all your blog posts contain tags

   Revisit each of your existing Markdown pages and ensure that every post contains a `tags` array in its frontmatter. Even if you only have one tag, it should still be written as an array, e.g. `tags: ["blogging"]`.

2. Create an array of all your existing tags using Astro's built-in TypeScript support.

   Add the following code to provide you with a list of every tag used in your blog posts.

   ```astro title="src/pages/tags/[tag].astro" ins={7}
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro';

   export async function getStaticPaths() {
     const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));

     const uniqueTags = [...new Set(allPosts.map((post: any) => post.frontmatter.tags).flat())];
   }
   ```

   It's OK if this isn't something you would have written yourself yet!

   It goes through each Markdown post, one by one, and combines each array of tags into one single larger array. Then, it makes a new `Set` from all the individual tags it found (to ignore repeated values). Finally, it turns that set into an array (with no duplications), that you can use to show a list of tags on your page.

   You now have an array `uniqueTags` with element items `"astro"`, `"successes"`, `"community"`, `"blogging"`, `"setbacks"`, `"learning in public"`

3. Replace the `return` value of the `getStaticPaths` function

   ```js title="src/pages/tags/[tag].astro" del={1-8} ins={10-16}
   return [
     { params: { tag: "astro" }, props: { posts: allPosts } },
     { params: { tag: "successes" }, props: { posts: allPosts } },
     { params: { tag: "community" }, props: { posts: allPosts } },
     { params: { tag: "blogging" }, props: { posts: allPosts } },
     { params: { tag: "setbacks" }, props: { posts: allPosts } },
     { params: { tag: "learning in public" }, props: { posts: allPosts } },
   ];

   return uniqueTags.map((tag) => {
     const filteredPosts = allPosts.filter((post: any) =>
       post.frontmatter.tags.includes(tag)
     );
     return {
       params: { tag },
       props: { posts: filteredPosts },
     };
   });
   ```

4. A `getStaticPaths` function should always return a list of objects containing `params` (what to call each page route) and optionally any `props` (data that you want to pass to those pages). Earlier, you defined each tag name that you knew was used in your blog and passed the entire list of posts as props to each page.

   Now, you generate this list of objects automatically using your `uniqueTags` array to define each parameter.

   And, now the list of all blog posts is filtered **before** it is sent to each page as props. Be sure to remove the previous line of code filtering the posts, and update your HTML template to use `posts` instead of `filteredPosts`.

   ```astro title="src/pages/tags/[tag].astro" del={3,7} ins={8}
   const { tag } = Astro.params;
   const { posts } = Astro.props;
   const filteredPosts = posts.filter((post) => post.frontmatter.tags?.includes(tag));
   ---
   <!-- -->
   <ul>
     {filteredPosts.map((post: any) => <BlogPost url={post.url} title={post.frontmatter.title}/>)}
     {posts.map((post: any) => <BlogPost url={post.url} title={post.frontmatter.title}/>)}
   </ul>
   ```

### Final code sample

To check your work, or if you just want complete, correct code to copy into `[tag].astro`, here is what your Astro component should look like:

```astro title="src/pages/tags/[tag].astro"
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import BlogPost from '../../components/BlogPost.astro';

export async function getStaticPaths() {
  const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));

  const uniqueTags = [...new Set(allPosts.map((post: any) => post.frontmatter.tags).flat())];

  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post: any) => post.frontmatter.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts },
    };
  });
}

const { tag } = Astro.params;
const { posts } = Astro.props;
---
<BaseLayout pageTitle={tag}>
  <p>Posts tagged with {tag}</p>
  <ul>
    {posts.map((post: any) => <BlogPost url={post.url} title={post.frontmatter.title}/>)}
  </ul>
</BaseLayout>
```

Now, you should be able to visit any of your tag pages in your browser preview.

Navigate to `http://localhost:4321/tags/community` and you should see a list of only your blog posts with the tag `community`. Similarly `http://localhost:4321/tags/learning%20in%20public` should display a list of the blog posts tagged `learning in public`.

In the next section, you will create navigation links to these pages.
