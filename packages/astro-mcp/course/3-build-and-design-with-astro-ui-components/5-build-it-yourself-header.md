# Build it yourself - Header

Since your site will be viewed on different devices, it's time to create a page navigation that can respond to multiple screen sizes!

> **🎯 Get Ready To**
>
> - Create a Header for your site that contains the Navigation component

## Try it yourself - Build a new Header component

1. Create a new Header component. Import and use your existing `Navigation.astro` component inside a `<nav>` element which is inside a `<header>` element.

    <details>
    <summary>Show me the code!</summary>

    Create a file named `Header.astro` in `src/components/`
    ```astro title="src/components/Header.astro"
    ---
    import Navigation from './Navigation.astro';
    ---
    <header>
      <nav>
        <Navigation />
      </nav>
    </header>
    ```

    </details>

## Try it yourself - Update your pages

1. On each page, replace your existing `<Navigation/>` component with your new header.

    <details>
    <summary>Show me the code!</summary>

    ```astro title="src/pages/index.astro" ins={3,18} del={2,17}
    ---
    import Navigation from '../components/Navigation.astro';
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
        <Navigation />
        <Header />
        <h1>{pageTitle}</h1>
        <Footer />
      </body>
    </html>
    ```
    </details>

2. Check your browser preview and verify that your header is displayed on every page. It won't look different yet, but if you inspect your preview using dev tools, you will see that you now have elements like `<header>` and `<nav>` around your navigation links.
