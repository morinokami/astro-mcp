# Congratulations!

There's one more edit to make...

```astro title="src/pages/about.astro" del={5} ins={6}
---
import BaseLayout from "../layouts/BaseLayout.astro";
const pageTitle = "About Me";
const happy = true;
const finished = false;
const finished = true;
const goal = 3;
const identity = {
  firstName: "Sarah",
  country: "Canada",
  occupation: "Technical Writer",
  hobbies: ["photography", "birdwatching", "baseball"],
};
const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
const skillColor = "navy";
const fontWeight = "bold";
const textCase = "uppercase";
---
```

We hope you learned a little about the basics of Astro, and had fun along the way!

You can find the code for the project in this tutorial on [GitHub](https://github.com/withastro/blog-tutorial-demo/tree/complete) or open a working version in an online code environment like [IDX](https://idx.google.com/import?url=https:%2F%2Fgithub.com%2Fwithastro%2Fblog-tutorial-demo%2F) or
[StackBlitz](https://stackblitz.com/github/withastro/blog-tutorial-demo/tree/complete?file=src/pages/index.astro).

Check out our docs for guides and reference material, and visit our Discord to ask questions, get help or just hang out!

Welcome to the universe, astronaut. 👩🏼‍🚀👨🏿‍🚀🧑‍🚀👩🏾‍🚀
