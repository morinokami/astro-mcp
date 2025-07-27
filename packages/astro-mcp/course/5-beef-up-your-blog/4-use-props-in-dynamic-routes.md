## Use props in dynamic routes

> **🎯 Get Ready To**
>
> - Specify which page routes to build, and pass each page its own props

1. Add the following props to your `getStaticPaths()` function in order to make data from all your blog posts available to each page route.

   Be sure to give each route in your array the new props, and then make those props available to your component template outside of your function.

   ```astro title="src/pages/tags/[tag].astro" ins={5,18} ins="props: {posts: allPosts}"
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro';

   export async function getStaticPaths() {
     const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));

     return [
       {params: {tag: "astro"}, props: {posts: allPosts}},
       {params: {tag: "successes"}, props: {posts: allPosts}},
       {params: {tag: "community"}, props: {posts: allPosts}},
       {params: {tag: "blogging"}, props: {posts: allPosts}},
       {params: {tag: "setbacks"}, props: {posts: allPosts}},
       {params: {tag: "learning in public"}, props: {posts: allPosts}}
     ];
   }

   const { tag } = Astro.params;
   const { posts } = Astro.props;
   ---
   ```

2. Filter your list of posts, using Astro's built-in TypeScript support, to only include posts that contain the page's own tag.

   ```astro title="src/pages/tags/[tag].astro" ins={4}
   ---
   const { tag } = Astro.params;
   const { posts } = Astro.props;
   const filteredPosts = posts.filter((post: any) => post.frontmatter.tags?.includes(tag));
   ---
   ```

3. Now you can update your HTML template to show a list of each blog post containing the page's own tag. Add the following code to `[tag].astro`:

   ```astro title="src/pages/tags/[tag].astro" ins={3-5}
   <BaseLayout pageTitle={tag}>
     <p>Posts tagged with {tag}</p>
     <ul>
       {filteredPosts.map((post: any) => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
     </ul>
   </BaseLayout>
   ```

4. You can even refactor this to use your `<BlogPost />` component instead! (Don't forget to import this component at the top of `[tag].astro`.)

   ```astro title="src/pages/tags/[tag].astro" del={4} ins={5}
   <BaseLayout pageTitle={tag}>
     <p>Posts tagged with {tag}</p>
     <ul>
       {filteredPosts.map((post: any) => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
       {filteredPosts.map((post: any) => <BlogPost url={post.url} title={post.frontmatter.title}/>)}
     </ul>
   </BaseLayout>
   ```

5. Check your browser preview for your individual tag pages, and you should now see a list of all of your blog posts containing that particular tag.

:::note[Takeaway]
If you need information to construct the page routes, write it **inside** `getStaticPaths()`.

To receive information in the HTML template of a page route, write it **outside** `getStaticPaths()`.
:::
