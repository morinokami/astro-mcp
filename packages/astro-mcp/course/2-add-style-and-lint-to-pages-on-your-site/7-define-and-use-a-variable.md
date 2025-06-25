# Define your page title in frontmatter, and use it in your HTML

Now that you have a multi-page website with HTML content, it's time to add some dynamic HTML!

> **🎯 Get Ready To**
>
> - Define your page title in frontmatter, and use it in your HTML

Any HTML file is valid Astro language. But, you can do more with Astro than just regular HTML!

## Define and use a variable

Open `about.astro`, which should look like this:

```astro title="src/pages/about.astro"
---
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Astro</title>
  </head>
  <body>
    <a href="/">Home</a>
    <a href="/about/">About</a>
    <a href="/blog/">Blog</a>
    <h1>About Me</h1>
    <h2>... and my new Astro site!</h2>

    <p>I am working through Astro's introductory tutorial. This is the second page on my website, and it's the first one I built myself!</p>

    <p>This site will update as I complete more of the tutorial, so keep checking back and see how my journey is going!</p>
  </body>
</html>
```

1. Add the following line of JavaScript in the frontmatter script, between the **code fences**:

   ```astro title="src/pages/about.astro" ins={2}
   ---
   const pageTitle = "About Me";
   ---
   ```

2. Replace both the static "Astro" title and "About Me" heading in your HTML with the dynamic variable `{pageTitle}`.

   ```astro title="src/pages/about.astro" del={5,12} ins={6,13}
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Astro</title>
       <title>{pageTitle}</title>
     </head>
     <body>
       <a href="/">Home</a>
       <a href="/about/">About</a>
       <a href="/blog/">Blog</a>
       <h1>About Me</h1>
       <h1>{pageTitle}</h1>
       <h2>... and my new Astro site!</h2>

       <p>I am working through Astro's introductory tutorial. This is the second page on my website, and it's the first one I built myself!</p>

       <p>This site will update as I complete more of the tutorial, so keep checking back and see how my journey is going!</p>
     </body>
   </html>
   ```

3. Refresh the live preview of your `/about` page.

   Your page text should look the same, and your page title displayed in your browser tab should now read "About Me" instead of "Astro."

   Instead of typing text directly into HTML tags, you just **defined and then used a variable** in the two sections of your `.astro` file, respectively.

4. Use the same pattern to create a `pageTitle` value to use in `index.astro` ("Home Page") and `blog.astro` ("My Astro Learning Blog"). Update the HTML of these pages in both places so that your page title matches the heading displayed on each page.

> **💡 Takeaways**
>
> 1. **Define** variables in your Astro script using JavaScript or TypeScript expressions.
> 2. **Use** these variables in your Astro template inside curly braces `{ }` to tell Astro you're using some JavaScript.
