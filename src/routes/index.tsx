import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import {
  faBandcamp,
  faItunesNote,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

import StateOfNeptuneGalleryImg from "/public/images/gallery/IMG_20241015_133847_523.webp?jsx";
import StateOfNeptuneLogo from "/public/images/logo/state-of-neptune-wht-inline-red.webp?jsx";

import { FaIcon } from "qwik-fontawesome";

import H2 from "~/components/heading/h2";
import Card from "~/components/card/card";
import Paragraph from "~/components/paragraph/paragraph";

import { RELEASES } from "./discography/releases";

export default component$(() => {
  return (
    <>
      <section class="relative flex min-h-[90lvh] justify-center">
        <div
          class={[
            "flex w-[60ch] flex-col items-center justify-center px-6 md:w-[90ch]",
            "before:absolute before:inset-0 before:-z-10 before:h-full before:w-full",
            "before:bg-[linear-gradient(rgba(13,13,13,0.5)),url(/images/backgrounds/freakout-live.webp)]",
            "before:bg-cover before:bg-center before:content-['']",
          ]}
        >
          <StateOfNeptuneLogo class="w-full p-6" alt="State Of Neptune logo." />

          <div class="mb-8 flex flex-col justify-center gap-8 md:mb-16 md:flex-row md:gap-6">
            <StateOfNeptuneGalleryImg
              class="h-[24em] object-cover object-bottom md:h-[40em]"
              alt="State Of Neptune live extract from Freakout Club, Bologna, Italy."
            />

            <div class="font-body flex flex-col justify-between gap-4 text-justify md:gap-0">
              <p>
                Heavy punk trio from Sicily (Italy). We like dirty sounds, dirty
                kebab and delivering high-energy live performances. Our music is
                a tribute to the island we were born in — we draw inspiration
                from punk, stoner, alternative and post-era territories of all
                kinds.
              </p>

              <p>
                We shared the beginning our journey on June 11th 2022 with our
                self-produced debut album "Pulp Of Stones", followed by two
                intense years of noise-around-and-find-out in our hometown and
                its regional surroundings, building up a small, yet genuine
                following and acknowledgement in the DIY and underground scene.
              </p>

              <p>
                After some polishing and fine-tuning, on February 6th 2026 we
                released our latest record "A Gambler's Demise", via OverDub
                Recordings, both framing a snapshot over the past 4 years worth
                of work and starting a whole new chapter for us as a band.
              </p>

              <p>
                We are currently working on our next studio project, among other
                things — feel free to reach out to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-8 mb-8 flex flex-col items-center justify-center gap-8 px-12">
        <H2 id="discography">Discography</H2>

        {RELEASES.map((release) => (
          <>
            <article
              key={release.id}
              class="flex flex-col items-center justify-center gap-4"
            >
              <div class="flex flex-col items-center justify-center">
                <h3 class="font-body text-xl lg:text-2xl">{release.title}</h3>

                <Paragraph align="center" class="text-dim italic">
                  {release.type === "single" ? "Single" : "Album"} out on all
                  platforms
                </Paragraph>
              </div>

              <Card
                id={release.id}
                href={release.href}
                aria-label={release.label}
                external
              >
                <div
                  q:slot="image"
                  class="transition-transform duration-200 group-focus-within:scale-[102%] group-hover:scale-[102%]"
                >
                  {release.image}
                </div>

                <div q:slot="title" class="mb-2 flex flex-col justify-center">
                  <span class="font-body focus-within:text-accent hover:text-accent transition-all md:text-lg">
                    Listen to {release.title}
                  </span>
                </div>

                <div
                  q:slot="subtitle"
                  class="flex flex-col justify-center gap-2"
                >
                  <div class="flex justify-center gap-6">
                    {release.links.map((link) => (
                      <>
                        <a
                          class="font-body focus-within:text-accent hover:text-accent text-lg transition-all"
                          href={link.href}
                          aria-label={link.href}
                          target="_blank"
                        >
                          <FaIcon
                            icon={
                              link.type === "spotify"
                                ? faSpotify
                                : link.type === "bandcamp"
                                  ? faBandcamp
                                  : faItunesNote
                            }
                          ></FaIcon>
                        </a>
                      </>
                    ))}
                  </div>
                </div>
              </Card>
            </article>
          </>
        ))}
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
