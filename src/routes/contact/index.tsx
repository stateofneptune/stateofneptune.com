import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestEvent } from "@builder.io/qwik-city";

export const onGet = async ({ redirect }: RequestEvent) => {
  throw redirect(
    307,
    "https://stateofneptune.bandcamp.com/contact?b=1895537099&n=State%20Of%20Neptune"
  );
};

export default component$(() => {
  return <></>;
});

export const head: DocumentHead = {
  title: "Contact",
  meta: [
    {
      name: "description",
      content: "State Of Neptune contact page.",
    },
    {
      property: "og:description",
      content: "State Of Neptune contact page.",
    },
    {
      property: "og:url",
      content: "https://www.stateofneptune.com/contact",
    },
    {
      property: "twitter:description",
      content: "State Of Neptune contact page.",
    },
  ],
};
