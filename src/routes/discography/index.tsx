import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Title from "~/components/title/title";
import FullDiscography from "~/components/full-discography/full-discography";

export default component$(() => {
  return (
    <>
      <Title>Discography</Title>

      <section class="my-12 flex justify-center px-12">
        <FullDiscography />
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Discography",
  meta: [
    {
      name: "description",
      content: "State Of Neptune full discography.",
    },
    {
      property: "og:description",
      content: "State Of Neptune full discography.",
    },
    {
      property: "og:url",
      content: "https://www.stateofneptune.com/discography",
    },
    {
      property: "twitter:description",
      content: "State Of Neptune full discography.",
    },
  ],
};
