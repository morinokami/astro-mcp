# Create and pass data to a custom blog layout

Now that you have a layout for your pages, it's time to add a layout for blog posts!

> **🎯 Get Ready To**
>
> - Create a new blog post layout for your Markdown files
> - Pass YAML frontmatter values as props to layout component

## Add a layout to your blog posts

When you include the `layout` frontmatter property in an `.md` file, all of your frontmatter YAML values are available to the layout file.

1. Create a new file at `src/layouts/MarkdownPostLayout.astro`

2. Copy the following code into `MarkdownPostLayout.astro`

    ```astro title="src/layouts/MarkdownPostLayout.astro"
    ---
    const { frontmatter } = Astro.props;
    ---
    <meta charset="utf-8" />
    <h1>{frontmatter.title}</h1>
    <p>Written by {frontmatter.author}</p>
    <slot />
    ```

3. Add the following frontmatter property in `post-1.md`

    ```markdown title="src/pages/posts/post-1.md" ins={2}
    ---
    layout: ../../layouts/MarkdownPostLayout.astro
    title: 'My First Blog Post'
    pubDate: 2022-07-01
    description: 'This is the first post of my new Astro blog.'
    author: 'Astro Learner'
    image:
        url: 'https://docs.astro.build/assets/rose.webp' 
        alt: 'The Astro logo on a dark background with a pink glow.'
    tags: ["astro", "blogging", "learning in public"]
    ---
    ```

4. Check your browser preview again at `http://localhost:4321/posts/post-1` and notice what the layout has added to your page. 

5. Add the same layout property to your two other blog posts `post-2.md` and `post-3.md`. Verify in your browser that your layout is also applied to these posts.

:::tip
When using layouts, you now have the option of including elements, like a page title, in the Markdown content or in the layout. Remember to visually inspect your page preview and make any adjustments necessary to avoid duplicated elements. 
:::

## Try it yourself - Customize your blog post layout

**Challenge**: Identify items common to every blog post, and use `MarkdownPostLayout.astro` to render them, instead of writing them in your Markdown in `post-1.md` and in every future blog post.

Here's an example of refactoring your code to include the `pubDate` in the layout component instead of writing it in the body of your Markdown:

```markdown title="src/pages/posts/post-1.md" del={1}
Published on: 2022-07-01

Welcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.
```

```astro title="src/layouts/MarkdownPostLayout.astro" ins={6}
---
const { frontmatter } = Astro.props;
---
<meta charset="utf-8" />
<h1>{frontmatter.title}</h1>
<p>Published on: {frontmatter.pubDate.toString().slice(0,10)}</p>
<p>Written by {frontmatter.author}</p>
<slot />
```

Refactor as much as you think is useful to you, and add as much to your layout as you want, remembering that everything that you add to your layout is one less thing you will write in each and every blog post!

Here is an example of a refactored layout that leaves only individual blog post content rendered by the slot. Feel free to use this, or create your own! 

```astro title="src/layouts/MarkdownPostLayout.astro"
---
const { frontmatter } = Astro.props;
---
<meta charset="utf-8" />
<h1>{frontmatter.title}</h1>
<p>{frontmatter.pubDate.toString().slice(0,10)}</p>
<p><em>{frontmatter.description}</em></p>
<p>Written by: {frontmatter.author}</p>
<img src={frontmatter.image.url} width="300" alt={frontmatter.image.alt} />
<slot />
```

:::note[Avoid duplication]
Anything rendered by your layout does **not** need to be typed into your blog post! If you notice any duplication when you check your browser preview, then be sure to remove content from your Markdown file.
:::
