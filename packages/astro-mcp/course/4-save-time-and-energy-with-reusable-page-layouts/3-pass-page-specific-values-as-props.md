# Pass page-specific values as props to its layout

> **🎯 Get Ready To**
>
> - Pass page-specific values as props to its layout

## Pass page-specific values as props

1. Pass the page title to your layout component from `index.astro` using a component attribute:

    ```astro title="src/pages/index.astro" 'pageTitle={pageTitle}'
    ---
    import BaseLayout from '../layouts/BaseLayout.astro';
    const pageTitle = "Home Page";
    ---
    <BaseLayout pageTitle={pageTitle}>
      <h2>My awesome blog subtitle</h2>
    </BaseLayout>
    ```

2. Change the script of your `BaseLayout.astro` layout component to receive a page title via `Astro.props` instead of defining it as a constant.

    ```astro title="src/layouts/BaseLayout.astro" del={5} ins={6}
    ---
    import Header from '../components/Header.astro';
    import Footer from '../components/Footer.astro';
    import '../styles/global.css';
    const pageTitle = "Home Page";
    const { pageTitle } = Astro.props;
    ---
    ```

3. Check your browser preview to verify that your page title has not changed. It has the same value, but is now being rendered dynamically. And now, each individual page can specify its own title to the layout.

## Try it yourself - Use your layout everywhere

**Refactor** your other pages (`blog.astro` and `about.astro`) so that they use your new `<BaseLayout>` component to render the common page elements.

Don't forget to:

- Pass a page title as props via a component attribute.

- Let the layout be responsible for the HTML rendering of any common elements.

- Move any existing `<style>` tags in the page `<head>` with styles you wish to keep to the page HTML template.

- Delete anything from each individual page that is now being handled by the layout, including:

  - HTML elements
  - Components and their imports
  - CSS rules in a `<style>` tag (e.g. `<h1>` in your About page)
  - `<script>` tags

:::note[Keeping your About page styles]
Using the `<BaseLayout>` to render your `about.astro` page means you will lose the `<style>` tag added to the `<head>` of this page. To continue to style items only at the page level using Astro's scoped styling, move the `<style>`  tag to the body of the page component. This allows you to style **elements created in this page component** (e.g. your list of skills).

Since your `<h1>` is now created by your layout component, you can add the `is:global` attribute to your style tag to affect every element on this page, including those created by other components: `<style is:global define:vars={{ skillColor, fontWeight, textCase }}>`
:::
