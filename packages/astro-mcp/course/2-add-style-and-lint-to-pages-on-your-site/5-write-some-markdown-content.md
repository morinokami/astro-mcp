# Write some Markdown content

> **🎯 Get Ready To**
>
> - Write some Markdown content

## Write Markdown content

1. Copy or type the following code into `post-1.md`

   ```markdown title="src/pages/posts/post-1.md"
   ---
   title: "My First Blog Post"
   pubDate: 2022-07-01
   description: "This is the first post of my new Astro blog."
   author: "Astro Learner"
   image:
     url: "https://docs.astro.build/assets/rose.webp"
     alt: "The Astro logo on a dark background with a pink glow."
   tags: ["astro", "blogging", "learning in public"]
   ---

   # My First Blog Post

   Published on: 2022-07-01

   Welcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.

   ## What I've accomplished

   1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.

   2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.

   3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!

   ## What's next

   I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
   ```

2. Check your browser preview again at `http://localhost:4321/posts/post-1`. You should now see content on this page. It may not yet be properly formatted, but don't worry, you will update this later in the tutorial!
3. Use your browser's Dev Tools to inspect this page. Notice that although you have not typed any HTML elements, your Markdown has been converted to HTML. You can see elements such as headings, paragraphs, and list items.

:::note
The information at the top of the file, inside the code fences, is called frontmatter. This data—including tags and a post image—is information _about_ your post that Astro can use. It does not appear on the page automatically, but you will access it later in the tutorial to enhance your site.
:::
