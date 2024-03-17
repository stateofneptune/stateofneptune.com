import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import LiveAtVastoRecordsArtwork from "/public/images/artworks/live-at-vasto-records@640.webp?jsx";
import PulpOfStonesArtwork from "/public/images/artworks/pulp-of-stones@640.webp?jsx";
import ParadoxArtwork from "/public/images/artworks/paradox@640.webp?jsx";
import FuryArtwork from "/public/images/artworks/fury@640.webp?jsx";

import StateOfNeptuneLogoHQ from "/public/images/logo/state-of-neptune-wht-inline-hq.png?jsx";

import Heading from "~/components/heading/heading";
import Card from "~/components/card/card";

export default component$(() => {
  return (
    <>
      <section class="relative flex min-h-[80lvh] justify-center">
        <div
          class={[
            "flex w-[100ch] flex-col justify-center gap-12 text-center md:gap-24",
            "before:absolute before:inset-0 before:-z-10 before:h-full before:w-full",
            "before:bg-[linear-gradient(rgba(13,13,13,0.5),rgba(13,13,13,0.5)),url(/images/backgrounds/anomalia-live.webp)]",
            "before:bg-cover before:bg-center before:content-['']",
          ]}
        >
          <StateOfNeptuneLogoHQ />

          <p class="mb-24 px-6 font-body text-sm transition-[font] md:text-base lg:text-lg">
            Mixing a wide range of influences from the rawness of stoner and
            punk to the intricacies of metal and grunge, State Of Neptune have
            shared the beginning of their journey on June 11th 2022, with their
            self-produced debut album "Pulp Of Stones".
            <br />
            <br />
            Creating quite a buzz in their hometown and its surroundings, thanks
            to a full year of high-energy live performances and the will to
            embrace the underground culture, on September 15th 2023 they
            released the session "Live At Vasto Records", which contains live
            renditions of "Fury", a beloved song from "Pulp Of Stones", and
            "Stone Lady", a new song and a glimpse of the future to come.
          </p>
        </div>
      </section>

      <section class="mt-12 flex justify-center font-body text-2xl">
        <Heading id="discography">Discography</Heading>
      </section>

      <section class="m-12 flex justify-center">
        <div class="flex w-[60rem] flex-wrap justify-center gap-16">
          <Card
            id="live-at-vasto-records"
            title="Live At Vasto Records"
            href="https://stateofneptune.bandcamp.com/album/live-at-vasto-records"
          >
            <LiveAtVastoRecordsArtwork class="w-96" />
          </Card>

          <Card
            id="pulp-of-stones"
            title="Pulp Of Stones"
            href="https://stateofneptune.bandcamp.com/album/pulp-of-stones"
          >
            <PulpOfStonesArtwork class="w-96" />
          </Card>

          <Card
            id="paradox"
            title="Paradox"
            href="https://stateofneptune.bandcamp.com/track/paradox"
          >
            <ParadoxArtwork class="w-96" />
          </Card>

          <Card
            id="fury"
            title="Fury"
            href="https://stateofneptune.bandcamp.com/track/fury"
          >
            <FuryArtwork class="w-96" />
          </Card>
        </div>
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
