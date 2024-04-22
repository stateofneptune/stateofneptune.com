import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import StateOfNeptuneLogoHQ from "/public/images/logo/state-of-neptune-wht-inline-hq.png?jsx";

import Heading from "~/components/heading/heading";
import FullDiscography from "~/components/full-discography/full-discography";
import Paragraph from "~/components/paragraph/paragraph";

export default component$(() => {
  return (
    <>
      <section class="relative flex min-h-[90lvh] justify-center">
        <div
          class={[
            "flex w-[100ch] flex-col justify-center gap-8 md:gap-16",
            "before:absolute before:inset-0 before:-z-10 before:h-full before:w-full",
            "before:bg-[linear-gradient(rgba(13,13,13,0.5),rgba(13,13,13,0.5)),url(/images/backgrounds/anomalia-live.webp)]",
            "before:bg-cover before:bg-center before:content-['']",
          ]}
        >
          <StateOfNeptuneLogoHQ class="p-2" alt="State Of Neptune logo." />

          <div class="mb-16 px-12">
            <Paragraph>
              Mixing a wide range of influences from the rawness of stoner and
              punk to the intricacies of metal and grunge, State Of Neptune have
              shared the beginning of their journey on June 11th 2022, with
              their self-produced debut album "Pulp Of Stones".
              <br />
              <br />
              Creating quite a buzz in their hometown and its surroundings,
              thanks to a full year of high-energy live performances and the
              will to embrace the underground culture, on September 15th 2023
              they released the session "Live At Vasto Records", which contains
              live renditions of "Fury", a beloved song from "Pulp Of Stones",
              and "Stone Lady", a new song and a glimpse of the future to come.
            </Paragraph>
          </div>
        </div>
      </section>

      <section class="mt-12 flex justify-center">
        <Heading id="discography">Discography</Heading>
      </section>

      <section class="my-12 flex justify-center px-12">
        <FullDiscography />
      </section>
    </>
  );
});

const META_DESCRIPTION =
  "Palermo, Italy punk stoner trio State Of Neptune's official website \
featuring music, tour dates, videos and more.";

export const head: DocumentHead = {
  title: "Home",
  meta: ["description", "og:description", "twitter:description"].map(
    (name) => ({
      content: META_DESCRIPTION,
      name,
    })
  ),
};
