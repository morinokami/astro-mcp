# Use an Astro `<slot />` element to place page contents within a layout

> **🎯 Get Ready To**
>
> - Use an Astro `<slot />` element to place page contents within a layout

## Use your layout on a page

1. Replace the code at `src/pages/index.astro` with the following:

    ```astro title="src/pages/index.astro"
    ---
    import BaseLayout from '../layouts/BaseLayout.astro';
    const pageTitle = "Home Page";
    ---
    <BaseLayout>
      <h2>My awesome blog subtitle</h2>
    </BaseLayout>
    ```

2. Check the browser preview again to notice what did (or, spoiler alert: did _not_!) change.

3. Add a `<slot />` element to `src/layouts/BaseLayout.astro` just above the footer component, then check the browser preview of your Home page and notice what really _did_ change this time!

    ```astro title="src/layouts/BaseLayout.astro" ins={18}
    ---
    import Header from '../components/Header.astro';
    import Footer from '../components/Footer.astro';
    import '../styles/global.css';
    const pageTitle = "Home Page";
    ---
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
        <meta name="generator" content={Astro.generator} />
        <title>{pageTitle}</title>
      </head>
      <body>
        <Header />
        <h1>{pageTitle}</h1>
        <slot />
        <Footer />
        <script>
          import "../scripts/menu.js";
        </script>
      </body>
    </html>
    ```

The `<slot />` allows you to inject (or "slot in") **child content** written between opening and closing `<Component></Component>` tags to any `Component.astro` file.
