# Create a hamburger menu component

Let's add a hamburger menu to open and close your links on mobile screen sizes, requiring some client-side interactivity!

> **🎯 Get Ready To**
>
> - Create a hamburger menu component

## Build a Hamburger component

Create a `<Hamburger />` component to open and close your mobile menu.

1. Create a file named `Hamburger.astro` in `src/components/`

2. Copy the following code into your component. This will represent your 3-line "hamburger" menu to open and close your navigation links on mobile. (You will add the new CSS styles to `global.css` later.)

    ```astro title="src/components/Hamburger.astro"
    --- 
    ---
    <div class="hamburger">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    ```

3. Place this new `<Hamburger />` component just before your `<Navigation />` component in `Header.astro`. 

    <details>
    <summary>Show me the code!</summary>

    ```astro title="src/components/Header.astro" ins={2,7}
    ---
    import Hamburger from './Hamburger.astro';
    import Navigation from './Navigation.astro';
    ---
    <header>
      <nav>
        <Hamburger />
        <Navigation />
      </nav>
    </header>
    ```
    </details>

4. Add the following styles for your Hamburger component:

    ```css title="src/styles/global.css" ins={2-13, 56-58}
    /* nav styles */
    .hamburger {
      padding-right: 20px;
      cursor: pointer;
    }

    .hamburger .line {
      display: block;
      width: 40px;
      height: 5px;
      margin-bottom: 10px;
      background-color: #ff9776;
    }

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

    .nav-links a:hover, a:focus {
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

      .hamburger {
        display: none;
      }
    }
    ```