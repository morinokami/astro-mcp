# Link to your blog posts on your Blog page

> **🎯 Get Ready To**
>
> - Link to your blog posts on your Blog page

## Link to your posts

1. Link to your first post with an anchor tag in `src/pages/blog.astro`:

   ```astro title="src/pages/blog.astro" ins={16-18}
   ---
   ---
   <html lang="en">
     <head>
       <meta charset="utf-8"/>
       <meta name="viewport" content="width=device-width" />
       <title>Astro</title>
     </head>
     <body>
       <a href="/">Home</a>
       <a href="/about/">About</a>
       <a href="/blog/">Blog</a>

       <h1>My Astro Learning Blog</h1>
       <p>This is where I will post about my journey learning Astro.</p>
       <ul>
         <li><a href="/posts/post-1/">Post 1</a></li>
       </ul>
     </body>
   </html>
   ```

2. Now, add two more files in `src/pages/posts/`: `post-2.md` and `post-3.md`. Here is some sample code you can copy and paste into your files, or, you can create your own!

   ```md title="src/pages/posts/post-2.md"
   ---
   title: My Second Blog Post
   author: Astro Learner
   description: "After learning some Astro, I couldn't stop!"
   image:
     url: "https://docs.astro.build/assets/arc.webp"
     alt: "The Astro logo on a dark background with a purple gradient arc."
   pubDate: 2022-07-08
   tags: ["astro", "blogging", "learning in public", "successes"]
   ---

   After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!
   ```

   ```md title="src/pages/posts/post-3.md"
   ---
   title: My Third Blog Post
   author: Astro Learner
   description: "I had some challenges, but asking in the community really helped!"
   image:
     url: "https://docs.astro.build/assets/rays.webp"
     alt: "The Astro logo on a dark background with rainbow rays."
   pubDate: 2022-07-15
   tags: ["astro", "learning in public", "setbacks", "community"]
   ---

   It wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!
   ```

3. Add links to these new posts:

   ```astro title="src/pages/blog.astro" ins={18-19}
   ---
   ---
   <html lang="en">
     <head>
       <meta charset="utf-8"/>
       <meta name="viewport" content="width=device-width" />
       <title>Astro</title>
     </head>
     <body>
       <a href="/">Home</a>
       <a href="/about/">About</a>
       <a href="/blog/">Blog</a>

       <h1>My Astro Learning Blog</h1>
       <p>This is where I will post about my journey learning Astro.</p>
       <ul>
         <li><a href="/posts/post-1/">Post 1</a></li>
         <li><a href="/posts/post-2/">Post 2</a></li>
         <li><a href="/posts/post-3/">Post 3</a></li>
       </ul>
     </body>
   </html>
   ```

4. Check your browser preview and make sure that:
   All your links for Post 1, Post 2, and Post 3 lead to a working page on your site. (If you find a mistake, check your links on `blog.astro` or your Markdown file names.)
