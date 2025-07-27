# Write a `<script>` to allow your site visitors to open and close the navigation menu

> **🎯 Get Ready To**
>
> - Write a `<script>` to allow your site visitors to open and close the navigation menu

## Write your first script tag

Your header is not yet **interactive** because it can't respond to user input, like clicking on the hamburger menu to show or hide the navigation links. 

Adding a `<script>` tag provides client-side JavaScript to "listen" for a user event and then respond accordingly.

1. Add the following `<script>` tag to `index.astro`, just before the closing `</body>` tag.

    ```astro title="src/pages/index.astro" ins={2-6}
      <Footer />
      <script>
        document.querySelector('.hamburger')?.addEventListener('click', () => {
          document.querySelector('.nav-links')?.classList.toggle('expanded');
        });
      </script>
    </body>
    ```

2. Check your browser preview again at various sizes, and verify that you have a working navigation menu that is both responsive to screen size and responds to user input on this page.
