# Refactor to use a `<BlogPost />` component for each list item

> **🎯 Get Ready To**
>
> - Refactor to use a `<BlogPost />` component for each list item

## Challenge: Create a BlogPost component

Try on your own to make all the necessary changes to your Astro project so that you can instead use the following code to generate your list of blog posts:

```astro title="src/pages/blog.astro" del={2} ins={3}
<ul>
  {allPosts.map((post: any) => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
  {allPosts.map((post: any) => <BlogPost url={post.url} title={post.frontmatter.title} />)}
</ul>
```

1. Create a new component in `src/components/`.

   ```
   BlogPost.astro
   ```

2. Write the line of code in your component so that it will be able to receive a `title` and `url` as `Astro.props`.

   ```astro
   ---
   // src/components/BlogPost.astro
   const { title, url } = Astro.props;
   ---
   ```

3. Add the templating used to create each item in your blog post list.

   ```astro
   <!-- src/components/BlogPost.astro -->
   <li><a href={url}>{title}</a></li>
   ```

4. Import the new component into your Blog page.

   ```astro title="src/pages/blog.astro" ins={3}
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   import BlogPost from '../components/BlogPost.astro';
   const allPosts = Object.values(import.meta.glob('../pages/posts/*.md', { eager: true }));
   const pageTitle = "My Astro Learning Blog";
   ---
   ```

5. Check Yourself: see the finished component code.

   ```astro title="src/components/BlogPost.astro"
   ---
   const { title, url } = Astro.props
   ---
   <li><a href={url}>{title}</a></li>
   ```

   ```astro title="src/pages/blog.astro" ins={3,10}
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   import BlogPost from '../components/BlogPost.astro';
   const allPosts = Object.values(import.meta.glob('../pages/posts/*.md', { eager: true }));
   const pageTitle = "My Astro Learning Blog"
   ---
   <BaseLayout pageTitle={pageTitle}>
     <p>This is where I will post about my journey learning Astro.</p>
     <ul>
       {allPosts.map((post: any) => <BlogPost url={post.url} title={post.frontmatter.title} />)}
     </ul>
   </BaseLayout>
   ```
