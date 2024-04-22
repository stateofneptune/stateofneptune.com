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

const META_DESCRIPTION =
  "Palermo, Italy punk stoner trio State Of Neptune's contact page.";

export const head: DocumentHead = {
  title: "Contact",
  meta: ["description", "og:description", "twitter:description"].map(
    (name) => ({
      content: META_DESCRIPTION,
      name,
    })
  ),
};
