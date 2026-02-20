# Add site-wide styling

Now that you have a styled About page, it's time to add some global styles for the rest of your site!

> **🎯 Get Ready To**
>
> - Apply styles globally

## Add a global stylesheet

You have seen that the Astro `<style>` tag is **scoped by default**, meaning that it only affects the elements in its own file.

There are a few ways to define styles **globally** in Astro, but in this tutorial, you will create and import a `global.css` file into each of your pages. This combination of stylesheet and `<style>` tag gives you the ability to control some styles site-wide, and to apply some specific styles exactly where you want them.

1. Create a new file at the location `src/styles/global.css` (You'll have to create a `styles` folder first.)

2. Copy the following code into your new file, `global.css`

    ```css title="src/styles/global.css"
    html {
      background-color: #f1f5f9;
      font-family: sans-serif;
    }

    body {
      margin: 0 auto;
      width: 100%;
      max-width: 80ch;
      padding: 1rem;
      line-height: 1.5;
    }

    * {
      box-sizing: border-box;
    }

    h1 {
      margin: 1rem 0;
      font-size: 2.5rem;
    }
    ```

3. In `about.astro`, add the following import statement to your frontmatter: 

    ```astro title="src/pages/about.astro" ins={2}
    ---
    import '../styles/global.css';

    const pageTitle = "About Me";

    const identity = {
      firstName: "Sarah",
      country: "Canada",
      occupation: "Technical Writer",
      hobbies: ["photography", "birdwatching", "baseball"],
    };

    const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];

    const happy = true;
    const finished = false;
    const goal = 3;

    const skillColor = "navy";
    const fontWeight = "bold";
    const textCase = "uppercase";
    ---
    ```

4. Check the browser preview of your About page, and you should now see new styles applied!

## Try it yourself - Import your global stylesheet

Add the necessary line of code to each `.astro` file in your project to apply your global styles to every page of your site.

Add the following import statement to the two other page files: `src/pages/index.astro` and `src/pages/blog.astro`

```astro title="src/pages/index.astro" ins={2}
---
import '../styles/global.css';
---
```

Make any changes or additions you want to the content of your About page by adding HTML elements to the page template, either statically or dynamically. Write any additional JavaScript in your frontmatter script to provide you with values to use in your HTML. When you are happy with this page, commit your changes to GitHub before moving on to the next lesson.
