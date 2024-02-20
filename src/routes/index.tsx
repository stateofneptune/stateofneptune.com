import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Release from "~/components/release/release";

export default component$(() => {
  return (
    <>
      <section>
        <Release
          id="pulp-of-stones"
          heading="Album out now"
          src="images/artworks/pulp-of-stones@640.webp"
          href="https://stateofneptune.bandcamp.com/album/pulp-of-stones"
        ></Release>

        <Release
          id="paradox"
          heading="Single out now"
          src="images/artworks/paradox@640.webp"
          href="https://stateofneptune.bandcamp.com/track/paradox"
        ></Release>

        <Release
          id="fury"
          heading="Single out now"
          src="images/artworks/fury@640.webp"
          href="https://stateofneptune.bandcamp.com/track/fury"
        ></Release>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "description",
      content:
        "State Of Neptune official website. Get updates about new content, merch and live dates.",
    },
    {
      property: "og:description",
      content: "State Of Neptune official website.",
    },
    {
      property: "og:url",
      content: "https://www.stateofneptune.com",
    },
    {
      property: "twitter:description",
      content: "State Of Neptune official website.",
    },
  ],
};
