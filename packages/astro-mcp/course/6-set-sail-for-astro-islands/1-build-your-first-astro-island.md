# Build your first Astro island

Use a Preact component to greet your visitors with a randomly-selected welcome message!

> **🎯 Get Ready To**
>
> - Add Preact to your Astro project
> - Include Astro islands (Preact `.jsx` components) on your home page
> - Use `client:` directives to make islands interactive

## Add Preact to your Astro project

1. If it’s running, quit the dev server to have access to the terminal (keyboard shortcut: <kbd>Ctrl + C</kbd>).

2. Add the ability to use Preact components in your Astro project with a single command:

   ```sh
   npx astro add preact
   ```

3. Follow the command line instructions to confirm adding Preact to your project.

## Include a Preact greeting banner

This component will take an array of greeting messages as a prop and randomly select one of them to show as a welcome message. The user can click a button to get a new random message.

1. Create a new file in `src/components/` named `Greeting.jsx`

    Note the `.jsx` file extension. This file will be written in Preact, not Astro.

2. Add the following code to `Greeting.jsx`:

    ```jsx title="src/components/Greeting.jsx"
    import { useState } from 'preact/hooks';

    export default function Greeting({messages}) {

      const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
      
      const [greeting, setGreeting] = useState(messages[0]);

      return (
        <div> 
          <h3>{greeting}! Thank you for visiting!</h3>
          <button onClick={() => setGreeting(randomMessage())}>
            New Greeting
          </button>
        </div>
      );
    }
    ```

3. Import and use this component on your Home page `index.astro`.

    ```astro title="src/pages/index.astro" ins={3,8}
    ---
    import BaseLayout from '../layouts/BaseLayout.astro';
    import Greeting from '../components/Greeting';
    const pageTitle = "Home Page";
    ---
    <BaseLayout pageTitle={pageTitle}>
      <h2>My awesome blog subtitle</h2>
      <Greeting messages={["Hi", "Hello", "Howdy", "Hey there"]} />
    </BaseLayout>
    ```

    Check the preview in your browser: you should see a random greeting, but the button won't work!


4. Add a second `<Greeting />` component with the `client:load` directive.

    ```astro title="src/pages/index.astro" ins={9} "client:load"
    ---
    import BaseLayout from '../layouts/BaseLayout.astro';
    import Greeting from '../components/Greeting';
    const pageTitle = "Home Page";
    ---
    <BaseLayout pageTitle={pageTitle}>
      <h2>My awesome blog subtitle</h2>
      <Greeting messages={["Hi", "Hello", "Howdy", "Hey there"]} />
      <Greeting client:load messages={["Hej", "Hallo", "Hola", "Habari"]} />
    </BaseLayout>
    ```

  5. Revisit your page and compare the two components. The second button works because the `client:load` directive tells Astro to send and rerun its JavaScript on the _client_ when the page _loads_, making the component interactive. This is called a **hydrated** component.
  
  6. Once the difference is clear, remove the non-hydrated Greeting component.


      ```astro title="src/pages/index.astro" del={8} "client:load"
      ---
      import BaseLayout from '../layouts/BaseLayout.astro';
      import Greeting from '../components/Greeting';
      const pageTitle = "Home Page";
      ---
      <BaseLayout pageTitle={pageTitle}>
        <h2>My awesome blog subtitle</h2>
        <Greeting messages={["Hi", "Hello", "Howdy", "Hey there"]} />
        <Greeting client:load messages={["Hej", "Hallo", "Hola", "Habari"]} />
      </BaseLayout>
      ```
