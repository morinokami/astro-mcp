> **🎯 Get Ready To**
>
> - Create a feed that can be subscribed to and read by RSS feed readers

## Create an `.xml` feed document

1. Create a new file in `src/pages/` called `rss.xml.js`

2. Copy the following code into this new document. Customize the `title` and `description` properties, and if necessary, specify a different language in `customData`:

   ```js title="src/pages/rss.xml.js"
   import rss, { pagesGlobToRssItems } from "@astrojs/rss";

   export async function GET(context) {
     return rss({
       title: "Astro Learner | Blog",
       description: "My journey learning Astro",
       site: context.site,
       items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
       customData: `<language>en-us</language>`,
     });
   }
   ```

3. Add the `site` property to the Astro config with your site's own unique Netlify URL.

   ```js title="astro.config.mjs" ins={4}
   import { defineConfig } from "astro/config";

   export default defineConfig({
     site: "https://example.com",
   });
   ```

4. Visit `http://localhost:4321/rss.xml` and verify that you can see (unformatted) text on the page with an `item` for each of your `.md` files. Each item should contain blog post information such as `title`, `url`, and `description`.

### View your RSS feed in a reader

Download a feed reader, or sign up for an online feed reader service and subscribe to your site by adding your own Netlify URL. You can also share this link with others so they can subscribe to your posts, and be notified when a new one is published.
