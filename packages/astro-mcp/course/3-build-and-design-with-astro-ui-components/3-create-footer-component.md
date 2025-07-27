# Create a Footer component

> **🎯 Get Ready To**
>
> - Create a Footer component

Now that you have used Astro components on a page, it's time to use a component within another component!

## Create a Footer Component

1. Create a new file at the location `src/components/Footer.astro`.

2. Copy the following code into your new file, `Footer.astro`.

    ```astro title="src/components/Footer.astro"
    ---
    const platform = "github";
    const username = "withastro";
    ---

    <footer>
      <p>Learn more about my projects on <a href={`https://www.${platform}.com/${username}`}>{platform}</a>!</p>
    </footer>
    ```

### Import and use `Footer.astro`

1. Add the following import statement to the frontmatter in each of your three Astro pages (`index.astro`, `about.astro`, and `blog.astro`):

    ```js
    import Footer from '../components/Footer.astro';
    ```

2. Add a new `<Footer />` component in your Astro template on each page, just before the closing `</body>` tag to display your footer at the bottom of the page. 

    ```astro ins={1}
        <Footer />
      </body>
    </html>
    ```

3. In your browser preview, check that you can see your new footer text on each page.

## Try it yourself - Personalize your footer

Customize your footer to display multiple social networks (e.g. Instagram, Twitter, LinkedIn) and include your username to link directly to your own profile.

## Code Check-In

If you've been following along with each step in the tutorial, your `index.astro` file should look like this:

```astro title="src/pages/index.astro"
---
import Navigation from '../components/Navigation.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';

const pageTitle = 'Home Page';
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
		<h1>{pageTitle}</h1>
		<Footer />
	</body>
</html>
```
