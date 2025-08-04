import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import {
  faBandcamp,
  faItunesNote,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

import StateOfNeptuneGalleryImg from "/public/images/gallery/IMG_20241015_133847_523-crop.jpg?jsx";
import StateOfNeptuneLogo from "/public/images/logo/state-of-neptune-wht-inline-hq.png?jsx";
import PulpOfStonesArtwork from "/public/images/artworks/pulp-of-stones@640.webp?jsx";

import { FaIcon } from "qwik-fontawesome";

import Card from "~/components/card/card";
import Heading from "~/components/heading/heading";
import Paragraph from "~/components/paragraph/paragraph";

export default component$(() => {
  return (
    <>
      <section class="relative flex min-h-[90lvh] justify-center">
        <div
          class={[
            "flex w-[60ch] flex-col items-center justify-center px-6 md:w-[85ch]",
            "before:absolute before:inset-0 before:-z-10 before:h-full before:w-full",
            "before:bg-[linear-gradient(rgba(13,13,13,0.5)),url(/images/backgrounds/freakout-live.webp)]",
            "before:bg-cover before:bg-center before:content-['']",
          ]}
        >
          <StateOfNeptuneLogo />

          <div class="mb-8 flex flex-col justify-center gap-8 md:mb-16 md:flex-row md:gap-6">
            <StateOfNeptuneGalleryImg
              class="h-[24em] object-cover object-bottom md:h-[30em]"
              alt="State Of Neptune live extract from Freakout Club, Bologna, Italy."
            />

            <div class="font-body flex flex-col justify-between gap-4 text-justify md:gap-0 md:text-lg">
              <p>
                Power trio from Sicily (Italy). We like dirty sounds, dirty
                kebab and delivering high-energy live performances. Our music is
                a tribute to the island we were born in — we draw inspiration
                from punk, stoner, alternative and post-era territories of all
                kinds.
              </p>

              <p>
                We shared the beginning of our journey on June 11th 2022, with
                our self-produced debut album "Pulp Of Stones", followed by two
                intense years of noise-around-and-find-out in our hometown and
                its regional surroundings, building up a small, yet genuine
                following and acknowledgement in the DIY and underground scene.
              </p>

              <p>
                We are currently working on our new studio project, among other
                things — feel free to reach out to us.
              </p>

              {/* <p>Greetings from Frallo, Manfredi and Elia.</p> */}
            </div>
          </div>
        </div>
      </section>

      <section class="mt-8 mb-8 flex flex-col items-center justify-center gap-8 px-12">
        <Heading id="discography">Discography</Heading>

        <article class="flex flex-col items-center justify-center gap-4">
          <div class="flex flex-col items-center justify-center">
            <h3 class="font-body text-xl lg:text-2xl">Pulp Of Stones</h3>

            <Paragraph align="center" class="text-dim italic">
              Album out on all platforms
            </Paragraph>
          </div>

          <Card
            id="pulp-of-stones"
            href="https://stateofneptune.bandcamp.com/album/pulp-of-stones"
            external
          >
            <PulpOfStonesArtwork
              q:slot="image"
              class="w-[30rem] transition-transform group-focus-within:scale-105 group-hover:scale-105"
              alt="Artwork of studio album Pulp Of Stones from State Of Neptune."
            />

            <div q:slot="subtitle" class="flex flex-col justify-center gap-2">
              <span class="font-body md:text-lg">Listen to Pulp Of Stones</span>

              <div class="flex justify-center gap-6">
                <a
                  class="font-body focus-within:text-accent hover:text-accent text-lg transition-all"
                  href="https://open.spotify.com/intl-it/album/2UBy8Aw3gQkk3oRe8ytybE"
                  aria-label="Listen to Pulp Of Stones on Spotify."
                  target="_blank"
                >
                  <FaIcon icon={faSpotify}></FaIcon>
                </a>

                <a
                  class="font-body focus-within:text-accent hover:text-accent text-lg transition-all"
                  href="https://stateofneptune.bandcamp.com/album/pulp-of-stones"
                  aria-label="Listen to Pulp Of Stones on Bandcamp."
                  target="_blank"
                >
                  <FaIcon icon={faBandcamp}></FaIcon>
                </a>

                <a
                  class="font-body focus-within:text-accent hover:text-accent text-lg transition-all"
                  href="https://music.apple.com/it/album/pulp-of-stones/1626288912"
                  aria-label="Listen to Pulp Of Stones on Apple Music."
                  target="_blank"
                >
                  <FaIcon icon={faItunesNote}></FaIcon>
                </a>
              </div>
            </div>
          </Card>
        </article>
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
    }),
  ),
};
