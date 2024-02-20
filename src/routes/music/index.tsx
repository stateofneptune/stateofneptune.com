import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestEvent } from "@builder.io/qwik-city";

export const onGet = async ({ redirect }: RequestEvent) => {
  throw redirect(307, "https://stateofneptune.bandcamp.com/music");
};

export default component$(() => {
  return <></>;
});

export const head: DocumentHead = {
  title: "Music",
  meta: [
    {
      name: "description",
      content: "State Of Neptune music.",
    },
    {
      property: "og:description",
      content: "State Of Neptune music.",
    },
    {
      property: "og:url",
      content: "https://www.stateofneptune.com/music",
    },
    {
      property: "twitter:description",
      content: "State Of Neptune music.",
    },
  ],
};
