# Style your about page

Now that you have an About page with content about you, it's time to style it!

> **🎯 Get Ready To**
>
> - Style items on a single page

## Style an individual page

Using Astro's own `<style></style>` tags, you can style items on your page. Adding **attributes** and **directives** to these tags gives you even more ways to style.

1. Copy the following code and paste it into `src/pages/about.astro`:

    ```astro title="src/pages/about.astro" ins={6-11}
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{pageTitle}</title>
        <style>
          h1 {
            color: purple;
            font-size: 4rem;
          }
        </style>
      </head> 
    ```

    Check all three pages in your browser preview.

    :::tip
    If you are unable to determine colors visually, you can use the dev tools in your browser to inspect the `<h1>` title elements and verify the text color applied.
    :::

2. Add the class name `skill` to the generated `<li>` elements on your About page, so you can style them. Your code should now look like this:

    ```astro title="src/pages/about.astro" 'class="skill"'
    <p>My skills are:</p>
    <ul>
      {skills.map((skill) => <li class="skill">{skill}</li>)}
    </ul>
    ```

3. Add the following code to your existing style tag:

    ```astro title="src/pages/about.astro" ins={6-9}
    <style>
      h1 {
        color: purple;
        font-size: 4rem;
      }
      .skill {
        color: green;
        font-weight: bold;
      }
    </style>
    ```

4. Visit your About page in your browser again, and verify, through visual inspection or dev tools, that each item in your list of skills is now green and bold.
