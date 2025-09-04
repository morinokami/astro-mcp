# Create a blog post archive

Now that you have a few blog posts to link to, it's time to configure the Blog page to create a list of them automatically!

> **🎯 Get Ready To**
>
> - Access data from all your posts at once using `import.meta.glob()`
> - Display a dynamically generated list of posts on your Blog page

## Dynamically display a list of posts

1. Add the following code to `blog.astro` to return information about all your Markdown files. `import.meta.glob()` will return an array of objects, one for each blog post.

   ```astro title="src/pages/blog.astro" ins={3}
   ---
   import BaseLayout from '../layouts/BaseLayout.astro'
   const allPosts = Object.values(import.meta.glob('./posts/*.md', { eager: true }));
   const pageTitle = "My Astro Learning Blog";
   ---
   <BaseLayout pageTitle={pageTitle}>
     <p>This is where I will post about my journey learning Astro.</p>
     <ul>
       <li><a href="/posts/post-1/">Post 1</a></li>
       <li><a href="/posts/post-2/">Post 2</a></li>
       <li><a href="/posts/post-3/">Post 3</a></li>
     </ul>
   </BaseLayout>
   ```

2. To generate the entire list of posts dynamically, using the post titles and URLs, replace your individual `<li>` tags with the following Astro code:

   ```astro title="src/pages/blog.astro" del={9,10,11} ins={13}
   ---
   import BaseLayout from '../layouts/BaseLayout.astro'
   const allPosts = Object.values(import.meta.glob('./posts/*.md', { eager: true }));
   const pageTitle = "My Astro Learning Blog";
   ---
   <BaseLayout pageTitle={pageTitle}>
     <p>This is where I will post about my journey learning Astro.</p>
     <ul>
       <li><a href="/posts/post-1/">Post 1</a></li>
       <li><a href="/posts/post-2/">Post 2</a></li>
       <li><a href="/posts/post-3/">Post 3</a></li>

       {allPosts.map((post: any) => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
     </ul>
   </BaseLayout>
   ```

   Your entire list of blog posts is now being generated dynamically using Astro's built-in TypeScript support, by mapping over the array returned by `import.meta.glob()`.

3. Add a new blog post by creating a new `post-4.md` file in `src/pages/posts/` and adding some Markdown content. Be sure to include at least the frontmatter properties used below.

   ```markdown
   ---
   layout: ../../layouts/MarkdownPostLayout.astro
   title: My Fourth Blog Post
   author: Astro Learner
   description: "This post will show up on its own!"
   image:
     url: "https://docs.astro.build/default-og-image.png"
     alt: "The word astro against an illustration of planets and stars."
   pubDate: 2022-08-08
   tags: ["astro", "successes"]
   ---

   This post should show up with my other blog posts, because `import.meta.glob()` is returning a list of all my posts in order to create my list.
   ```

4. Revisit your blog page in your browser preview at `http://localhost:4321/blog` and look for an updated list with four items, including your new blog post!
