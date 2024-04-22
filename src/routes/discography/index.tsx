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

const META_DESCRIPTION =
  "Palermo, Italy punk stoner trio State Of Neptune's music collection.";

export const head: DocumentHead = {
  title: "Discography",
  meta: ["description", "og:description", "twitter:description"].map(
    (name) => ({
      content: META_DESCRIPTION,
      name,
    })
  ),
};
