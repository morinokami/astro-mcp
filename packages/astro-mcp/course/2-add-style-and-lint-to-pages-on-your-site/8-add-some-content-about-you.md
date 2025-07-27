# Add some content about you

> **🎯 Get Ready To**
>
> - Add some content about you

## Write JavaScript expressions in Astro

1. Add the following JavaScript to your frontmatter, between the **code fences**:

      (You can customize the code for yourself, but this tutorial will use the following example.)

    ```astro title="src/pages/about.astro" ins={4-9, 11}
    ---
    const pageTitle = "About Me";

    const identity = {
      firstName: "Sarah",
      country: "Canada",
      occupation: "Technical Writer",
      hobbies: ["photography", "birdwatching", "baseball"],
    };

    const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
    ---
    ```

2. Then, add the following code to your HTML template, below your existing content:

    ```astro title="src/pages/about.astro"
    <p>Here are a few facts about me:</p>
    <ul>
      <li>My name is {identity.firstName}.</li>
      <li>I live in {identity.country} and I work as a {identity.occupation}.</li>
      {identity.hobbies.length >= 2 && 
        <li>Two of my hobbies are: {identity.hobbies[0]} and {identity.hobbies[1]}</li>
      } 
    </ul>
    <p>My skills are:</p>
    <ul>
      {skills.map((skill) => <li>{skill}</li>)}
    </ul>
    ```

> **💡 Takeaways**
>
> 1. Writing an Astro template is very much like **writing HTML**, but you can include JavaScript expressions within it.
> 2. The Astro frontmatter script contains only JavaScript. 
> 3. You can use all modern JavaScript **logical operators**, **expressions** and **functions** in either section of your `.astro` file. But, curly braces are necessary (only) in the HTML template body.
