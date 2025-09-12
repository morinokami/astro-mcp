# Build your first layout

> **🎯 Get Ready To**
>
> - Refactor common elements into a page layout

You still have some Astro components repeatedly rendered on every page. It's time to refactor again to create a shared page layout!

## Create your first layout component

1. Create a new file at the location `src/layouts/BaseLayout.astro`. (You will need to create a new `layouts` folder first.)

2. Copy the **entire contents** of `index.astro` into your new file, `BaseLayout.astro`.

    ```astro title="src/layouts/BaseLayout.astro"
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
        <Footer />
        <script>
          import "../scripts/menu.js";
        </script>
      </body>
    </html>
    ```
