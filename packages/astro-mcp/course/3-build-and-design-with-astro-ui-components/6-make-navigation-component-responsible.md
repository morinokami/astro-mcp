# Make the Navigation component responsive

> **🎯 Get Ready To**
>
> - Make the Navigation component responsible

## Add responsive styles

1. Update `Navigation.astro` with the CSS class to control your navigation links. Wrap the existing navigation links in a `<div>` with the class `nav-links`.

    ```astro title="src/components/Navigation.astro" ins={3,7}
    ---
    ---
    <div class="nav-links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
    </div>
    ```

2. Copy the CSS styles below into `global.css`. These styles:

    - Style and position the navigation links for mobile
    - Include an `expanded` class that can be toggled to display or hide the links on mobile
    - Use a `@media` query to define different styles for larger screen sizes

    :::tip[Mobile-first design]
    Start by defining what should happen on small screen sizes first! Smaller screen sizes require simpler layouts. Then, adjust your styles to accommodate larger devices. If you design the complicated case first, then you have to work to try to make it simple again.
    :::

    ```css title="src/styles/global.css" ins={23-100}
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

    /* nav styles */

    .nav-links {
      width: 100%;
      top: 5rem;
      left: 48px;
      background-color: #ff9776;
      display: none;
      margin: 0;
    }

    .nav-links a {
      display: block;
      text-align: center;
      padding: 10px 0;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;
    }

    .nav-links a:hover,
    .nav-links a:focus {
      background-color: #ff9776;
    }

    .expanded {
      display: unset;
    }

    @media screen and (min-width: 636px) {
      .nav-links {
        margin-left: 5em;
        display: block;
        position: static;
        width: auto;
        background: none;
      }

      .nav-links a {
        display: inline-block;
        padding: 15px 20px;
      }

    }
    ```

Resize your window and look for different styles being applied at different screen widths. Your header is now **responsive** to screen size through the use of `@media` queries.
