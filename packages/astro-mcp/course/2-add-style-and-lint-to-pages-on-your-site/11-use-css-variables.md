# Use CSS variables

> **🎯 Get Ready To**
>
> - Use CSS variables

## Use your first CSS variable
The Astro `<style>` tag can also reference any variables from your frontmatter script using the `define:vars={ {...} }` directive. You can **define variables within your code fence**, then **use them as CSS variables in your style tag**.

1. Define a `skillColor` variable by adding it to the frontmatter script of `src/pages/about.astro` like this:

    ```astro title="src/pages/about.astro" ins={17}
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
  
    const skillColor = "navy";
    ---
    ```

2. Update your existing `<style>` tag below to first define, then use this `skillColor` variable inside double curly braces.

    ```astro title="src/pages/about.astro" "define:vars={{skillColor}}" "var(--skillColor)" del={7} ins={8}
    <style define:vars={{skillColor}}> 
      h1 {
        color: purple;
        font-size: 4rem;
      }
      .skill {
        color: green;
        color: var(--skillColor);
        font-weight: bold;
      }
    </style>
    ```

3. Check your About page in your browser preview. You should see that the skills are now navy blue, as set by the `skillColor` variable passed to the `define:vars` directive.

## Try it yourself - Define CSS variables

1. Update the `<style>` tag on your About page so that it matches the one below. 

    ```astro title="src/pages/about.astro"
    <style define:vars={{skillColor, fontWeight, textCase}}>
      h1 {
        color: purple;
        font-size: 4rem;
      }
      .skill {
        color: var(--skillColor);
        font-weight: var(--fontWeight);
        text-transform: var(--textCase);
      }
    </style>
    ```

 2. Add any missing variable definitions in your frontmatter script so that your new `<style>` tag successfully applies these styles to your list of skills:
    - The text color is navy blue
    - The text is bold
    - The list items are in all-caps (all uppercase letters)

    ```astro title="src/pages/about.astro" ins={18-19}
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

    const skillColor = "navy";
    const fontWeight = "bold";
    const textCase = "uppercase";
    ---
    ```
