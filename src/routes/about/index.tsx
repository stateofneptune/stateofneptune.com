import { component$ } from "@builder.io/qwik";
import StateOfNeptuneGalleryImg from "/public/images/gallery/20241013_LV_BOL.jpg?jsx";

import { DocumentHead } from "@builder.io/qwik-city";

import Paragraph from "~/components/paragraph/paragraph";
import Title from "~/components/title/title";

export default component$(() => {
  return (
    <>
      <Title>About</Title>

      <section class="my-12 flex w-full justify-center px-6">
        <div class="flex w-[60ch] flex-col gap-8 md:gap-12">
          <StateOfNeptuneGalleryImg alt="State Of Neptune live extract from Freakout Club, Bologna, Italy." />

          <Paragraph>
            We are State Of Neptune, a trio from Sicily (Italy). We like dirty
            sounds, dirty kebab and delivering high-energy live performances.
            Our music is a tribute to the island we were born in, we draw
            inspiration from punk, stoner, alternative and post-era territories
            of all kinds.
            <br />
            <br />
            We shared the beginning of our journey on June 11th 2022, with our
            self-produced debut album "Pulp Of Stones", followed by two intense
            years of noise-around-and-find-out in our hometown and its regional
            surroundings, building up a small, yet genuine following and
            acknowledgement in the DIY and underground scene. After some
            polishing and fine-tuning, on October 11th 2024 we released the song
            "Now I Remember My Face Again", introducing a new phase for the
            band.
            <br />
            <br />
            We are currently working on our new studio project, among other
            things, feel free to reach out to us!
            <br />
            <br />
            Greetings from Frallo, Manfredi and Elia.
          </Paragraph>
        </div>
      </section>
    </>
  );
});

const META_DESCRIPTION =
  "Palermo, Italy punk stoner trio State Of Neptune's biography.";

export const head: DocumentHead = {
  title: "About",
  meta: ["description", "og:description", "twitter:description"].map(
    (name) => ({
      content: META_DESCRIPTION,
      name,
    }),
  ),
};
