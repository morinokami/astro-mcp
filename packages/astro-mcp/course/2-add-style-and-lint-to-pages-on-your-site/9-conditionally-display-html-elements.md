# Conditionally display HTML elements

> **🎯 Get Ready To**
>
> - Conditionally display HTML elements

## Conditionally render elements

You can also use your script variables to choose **whether or not** to render individual elements of your HTML `<body>` content.

1. Add the following lines to your frontmatter script to **define variables**:

    ```astro title="src/pages/about.astro" ins={13-15}
    ---
    const pageTitle = "About Me";

    const identity = {
      firstName: "Sarah",
      country: "Canada",
      occupation: "Technical Writer",
      hobbies: ["photography", "birdwatching", "baseball"],
    };

    const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];

    const happy = true;
    const finished = false;
    const goal = 3;
    ---
    ```

2. Add the following lines below your existing paragraphs.

    Then, check the live preview in your browser tab to see what is displayed on the page:

    ```astro title="src/pages/about.astro" /:|&&/ "?"
    {happy && <p>I am happy to be learning Astro!</p>}

    {finished && <p>I finished this tutorial!</p>}

    {goal === 3 ? <p>My goal is to finish in 3 days.</p> : <p>My goal is not 3 days.</p>}
    ```

3. Commit your changes to GitHub before moving on. Do this any time you want to save your work and update your live website.

:::tip
Astro's templating syntax is similar to JSX syntax. If you're ever wondering how to use your script in your HTML, then searching for how it is done in JSX is probably a good starting point!
:::