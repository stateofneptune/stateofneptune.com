import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestEvent } from "@builder.io/qwik-city";

export const onGet = async ({ redirect }: RequestEvent) => {
  throw redirect(307, "https://stateofneptune.bandcamp.com/merch/");
};

export default component$(() => {
  return <></>;
});

const META_DESCRIPTION =
  "Palermo, Italy punk stoner trio State Of Neptune's merch page.";

export const head: DocumentHead = {
  title: "Contact",
  meta: ["description", "og:description", "twitter:description"].map(
    (name) => ({
      content: META_DESCRIPTION,
      name,
    }),
  ),
};
