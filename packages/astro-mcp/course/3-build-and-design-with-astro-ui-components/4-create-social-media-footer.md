# Create and pass props to a Social Media component

> **🎯 Get Ready To**
>
> - Create and pass props to a Social Media component

## Create a Social Media component

Since you might have multiple online accounts you can link to, you can make a single, reusable component and display it multiple times. Each time, you will pass it different properties (`props`) to use: the online platform and your username there.

1. Create a new file at the location `src/components/Social.astro`.

2. Copy the following code into your new file, `Social.astro`.

    ```astro title="src/components/Social.astro"
    ---
    const { platform, username } = Astro.props;
    ---
    <a href={`https://www.${platform}.com/${username}`}>{platform}</a>
    ```

### Import and use `Social.astro` in your Footer

1. Change the code in `src/components/Footer.astro` to import, then use this new component three times, passing different **component attributes** as props each time:

    ```astro title="src/components/Footer.astro" del={2,3,8} ins={4,9-11}
    ---
    const platform = "github";
    const username = "withastro";
    import Social from './Social.astro';
    ---

    <footer>
      <p>Learn more about my projects on <a href={`https://www.${platform}.com/${username}`}>{platform}</a>!</p>
      <Social platform="twitter" username="astrodotbuild" />
      <Social platform="github" username="withastro" />
      <Social platform="youtube" username="astrodotbuild" />
    </footer>
    ```

2. Check your browser preview, and you should see your new footer displaying links to these three platforms on each page.

## Style your Social Media Component

1. Customize the appearance of your links by adding a `<style>` tag to `src/components/Social.astro`.

    ```astro title="src/components/Social.astro" ins={6-17} 'class="social-platform'
    ---
    const { platform, username } = Astro.props;
    ---
    <a href={`https://www.${platform}.com/${username}`}>{platform}</a>

    <style>
      a {
        padding: 0.5rem 1rem;
        color: white;
        background-color: #4c1d95;
        text-decoration: none;
      }
    </style>
    ```

2. Add a `<style>` tag to `src/components/Footer.astro` to improve the layout of its contents.

    ```astro title="src/components/Footer.astro" ins={4-10}
    ---
    import Social from './Social.astro';
    ---
    <style>
      footer {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
      }
    </style>

    <footer>
      <Social platform="twitter" username="astrodotbuild" />
      <Social platform="github" username="withastro" />
      <Social platform="youtube" username="astrodotbuild" />
    </footer>
    ```

3. Check your browser preview again and confirm that each page shows an updated footer.

