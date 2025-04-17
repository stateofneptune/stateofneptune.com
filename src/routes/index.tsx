import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import type { DocumentHead } from "@builder.io/qwik-city";

import PoolOfConsciousness from "/public/images/artworks/pool-of-consciousness@720.webp?jsx";
import NowIRememberMyFaceAgain from "/public/images/artworks/now-i-remember-my-face-again@720.webp?jsx";

import Heading from "~/components/heading/heading";

import { FaIcon } from "qwik-fontawesome";

import {
  faArrowDown,
  faArrowRight,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

import Card from "~/components/card/card";
import Link from "~/components/link/link";
import Paragraph from "~/components/paragraph/paragraph";
import UnderlineLink from "~/components/underline-link/underline-link";

import {
  faSpotify,
  faBandcamp,
  faItunesNote,
} from "@fortawesome/free-brands-svg-icons";

const delay = (time: number) => new Promise((res) => setTimeout(res, time));

export default component$(() => {
  const pickupLineText = "It's been a long time...";

  const pickupLine = useSignal("");
  const pickupLineShown = useSignal(false);

  const delayms = 75;

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    for (let i = 0; i < pickupLineText.length; i++) {
      pickupLine.value += pickupLineText.charAt(i);

      await delay(delayms);
    }

    pickupLineShown.value = true;
  });

  return (
    <>
      <section class="relative flex min-h-[90lvh] justify-center">
        <div
          class={[
            "flex w-[142ch] flex-col items-center justify-center gap-4 md:gap-8",
            "before:absolute before:inset-0 before:-z-10 before:h-full before:w-full",
            "before:bg-[linear-gradient(rgba(13,13,13,0.5),rgba(13,13,13,0.5)),url(/images/backgrounds/now-i-remember-my-face-again-full.webp)]",
            "before:bg-cover before:bg-center before:content-['']",
          ]}
        >
          <Link
            class="text-body group flex flex-col items-center justify-center gap-4 px-2"
            href="/#now-i-remember-my-face-again"
          >
            <div class="font-title scale-y-[140%] text-center text-5xl tracking-[-0.035em] uppercase transition-[text-shadow] group-focus-within:text-shadow-lg group-hover:text-shadow-lg md:text-6xl lg:text-7xl xl:text-9xl">
              Now I Remember My Face Again
            </div>

            <div class="font-body text-center text-2xl lg:text-3xl">
              <span class="transition-[text-shadow] group-focus-within:text-shadow-lg group-hover:text-shadow-lg">
                {pickupLine.value}
              </span>

              <span
                class={[
                  pickupLineShown.value
                    ? "animate-[blink_1s_steps(2)_infinite]"
                    : "opacity-50",
                ]}
              >
                |
              </span>
            </div>
          </Link>

          <div
            class={[
              "font-body text-body absolute bottom-16 flex scroll-m-20 justify-center gap-2 text-center transition-opacity duration-1000 md:text-xl lg:scroll-mt-36",
              pickupLineShown.value
                ? "visible opacity-100"
                : "invisible opacity-0",
            ]}
          >
            <Link
              class="focus-within:text-dim hover:text-dim flex flex-col items-center justify-center transition-colors"
              href="/#announcements"
            >
              Announcements
              <FaIcon class="h-3 w-3" icon={faArrowDown}></FaIcon>
            </Link>
          </div>
        </div>
      </section>

      <section class="mt-16 flex flex-col items-center justify-center gap-12 px-12">
        <Heading id="announcements">Announcements</Heading>

        <article class="flex flex-col items-center justify-center gap-4">
          <div class="flex flex-col items-center justify-center">
            <h3 class="font-body text-2xl lg:text-3xl">
              Pool Of Consciousness
            </h3>

            <Paragraph align="center" class="text-dim italic">
              Single out on 26/04
            </Paragraph>
          </div>

          <Card
            id="pool-of-consciousness"
            href="https://distrokid.com/hyperfollow/stateofneptune/pool-of-consciousness"
            external
          >
            <PoolOfConsciousness
              q:slot="image"
              class="w-[33rem] transition-transform group-focus-within:scale-105 group-hover:scale-105"
              alt="Artwork of studio single Pool Of Consciousness from State Of Neptune."
            />

            <div
              q:slot="image-overlay"
              class="bg-deep-bg/85 flex h-full w-full items-center justify-center opacity-0 transition-[opacity_blur] group-focus-within:opacity-100 group-focus-within:backdrop-blur-[1px] group-hover:opacity-100 group-hover:backdrop-blur-[1px]"
            >
              <FaIcon class="text-body text-5xl" icon={faBookmark}></FaIcon>
            </div>

            <span
              q:slot="title"
              class="font-body focus-within:text-accent hover:text-accent text-lg transition-all"
            >
              Pool Of Consciousness — Pre-Save
            </span>
          </Card>
        </article>

        <article class="flex flex-col items-center justify-center gap-4">
          <div class="flex flex-col items-center justify-center">
            <h3 class="font-body text-2xl lg:text-3xl">
              Now I Remember My Face Again
            </h3>

            <Paragraph align="center" class="text-dim italic">
              Single out on all platforms
            </Paragraph>
          </div>

          <Card
            id="now-i-remember-my-face-again"
            href="https://stateofneptune.bandcamp.com/track/now-i-remember-my-face-again"
            external
          >
            <NowIRememberMyFaceAgain
              q:slot="image"
              class="w-[33rem] transition-transform group-focus-within:scale-105 group-hover:scale-105"
              alt="Artwork of studio single Now I Remember My Face Again from State Of Neptune."
            />

            <div
              q:slot="image-overlay"
              class="bg-deep-bg/85 flex h-full w-full items-center justify-center opacity-0 transition-[opacity_blur] group-focus-within:opacity-100 group-focus-within:backdrop-blur-[1px] group-hover:opacity-100 group-hover:backdrop-blur-[1px]"
            >
              <FaIcon class="text-5xl" icon={faBandcamp}></FaIcon>
            </div>

            <span
              q:slot="title"
              class="font-body focus-within:text-accent hover:text-accent text-lg transition-all"
            >
              Now I Remember My Face Again
            </span>

            <div q:slot="subtitle" class="mt-2 flex justify-center gap-6">
              <a
                class="font-body focus-within:text-accent hover:text-accent text-lg transition-all"
                href="https://open.spotify.com/album/0JJMR2ZEAAQo0OT3Eu8Ag4"
                aria-label="Listen to Now I Remember My Face Again on Spotify."
                target="_blank"
              >
                <FaIcon icon={faSpotify}></FaIcon>
              </a>

              <a
                class="font-body focus-within:text-accent hover:text-accent text-lg transition-all"
                href="https://stateofneptune.bandcamp.com/track/now-i-remember-my-face-again"
                aria-label="Listen to Now I Remember My Face Again on Bandcamp."
                target="_blank"
              >
                <FaIcon icon={faBandcamp}></FaIcon>
              </a>

              <a
                class="font-body focus-within:text-accent hover:text-accent text-lg transition-all"
                href="https://music.apple.com/it/album/now-i-remember-my-face-again-single/1772809150"
                aria-label="Listen to Now I Remember My Face Again on Apple Music."
                target="_blank"
              >
                <FaIcon icon={faItunesNote}></FaIcon>
              </a>
            </div>
          </Card>
        </article>
      </section>

      <section class="mt-6 mb-12 flex justify-center px-12">
        <UnderlineLink
          class="text-dim flex flex-wrap items-center justify-center gap-1"
          href="/discography/"
        >
          See full discography
          <FaIcon class="h-2 w-2 -rotate-45" icon={faArrowRight}></FaIcon>
        </UnderlineLink>
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
