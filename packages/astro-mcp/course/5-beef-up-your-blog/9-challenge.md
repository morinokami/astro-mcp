## Challenge: Include tags in your blog post layout

You have now written all the code you need to also display a list of tags on each blog post, and link them to their tag pages. You have existing work that you can reuse!

Follow the steps below, then check your work by comparing it to the [final code sample](#code-check-in-markdownpostlayout).

1. Copy the `<div class="tags">...</div>` and `<style>...</style>` from `src/pages/tags/index.astro` and reuse it inside `MarkdownPostLayout.astro`:

   ```astro title="src/layouts/MarkdownPostLayout.astro" ins={13-17, 21-40}
   ---
   import BaseLayout from './BaseLayout.astro';
   const { frontmatter } = Astro.props;
   ---
   <BaseLayout pageTitle={frontmatter.title}>
     <p><em>{frontmatter.description}</em></p>
     <p>{frontmatter.pubDate.toString().slice(0,10)}</p>

     <p>Written by: {frontmatter.author}</p>

     <img src={frontmatter.image.url} width="300" alt={frontmatter.image.alt} />

     <div class="tags">
       {tags.map((tag: string) => (
         <p class="tag"><a href={`/tags/${tag}`}>{tag}</a></p>
       ))}
     </div>

     <slot />
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

Before this code will work, you need to make **one small edit** to the code you pasted into `MarkdownPostLayout.astro`. Can you figure out what it is?

### Give me a hint

How are the other props (e.g. title, author, etc.) written in your layout template? How does your layout receive props from an individual blog post?

### Give me another hint!

In order to use props (values passed) from a `.md` blog post in your layout, like tags, you need to prefix the value with a certain word.

```astro title="src/layouts/MarkdownPostLayout.astro" "frontmatter"
    <div class="tags">
      {frontmatter.tags.map((tag: string) => (
        <p class="tag"><a href={`/tags/${tag}`}>{tag}</a></p>
      ))}
    </div>
```

### Code Check-in: MarkdownPostLayout

To check your work, or if you just want complete, correct code to copy into `MarkdownPostLayout.astro`, here is what your Astro component should look like:

```astro title="src/layouts/MarkdownPostLayout.astro"
---
import BaseLayout from './BaseLayout.astro';
const { frontmatter } = Astro.props;
---
<BaseLayout pageTitle={frontmatter.title}>
  <p><em>{frontmatter.description}</em></p>
  <p>{frontmatter.pubDate.toString().slice(0,10)}</p>

  <p>Written by: {frontmatter.author}</p>

  <img src={frontmatter.image.url} width="300" alt={frontmatter.image.alt} />

  <div class="tags">
    {frontmatter.tags.map((tag: string) => (
      <p class="tag"><a href={`/tags/${tag}`}>{tag}</a></p>
    ))}
  </div>

  <slot />
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
