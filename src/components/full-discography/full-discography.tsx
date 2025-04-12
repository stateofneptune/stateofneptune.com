import { component$ } from "@builder.io/qwik";

import NowIRememberMyFaceAgain from "/public/images/artworks/now-i-remember-my-face-again@720.webp?jsx";
import PulpOfStonesArtwork from "/public/images/artworks/pulp-of-stones@640.webp?jsx";
import ParadoxArtwork from "/public/images/artworks/paradox@640.webp?jsx";
import FuryArtwork from "/public/images/artworks/fury@640.webp?jsx";

import Card from "~/components/card/card";
import { FaIcon } from "qwik-fontawesome";
import {
  faBandcamp,
  faItunesNote,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

export default component$(() => {
  return (
    <>
      <div class="flex w-[60rem] flex-wrap justify-center gap-16">
        <Card
          id="now-i-remember-my-face-again"
          href="https://stateofneptune.bandcamp.com/track/now-i-remember-my-face-again"
          external
        >
          <NowIRememberMyFaceAgain
            q:slot="image"
            class="w-96 transition-transform group-focus-within:scale-105 group-hover:scale-105"
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

        <Card
          id="pulp-of-stones"
          href="https://stateofneptune.bandcamp.com/album/pulp-of-stones"
          external
        >
          <PulpOfStonesArtwork
            q:slot="image"
            class="w-96 transition-transform group-focus-within:scale-105 group-hover:scale-105"
            alt="Artwork of studio album Pulp Of Stones from State Of Neptune."
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
            Pulp Of Stones
          </span>

          <div q:slot="subtitle" class="mt-2 flex justify-center gap-6">
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
        </Card>

        <Card
          id="paradox"
          href="https://stateofneptune.bandcamp.com/track/paradox"
          external
        >
          <ParadoxArtwork
            q:slot="image"
            class="w-96 transition-transform group-focus-within:scale-105 group-hover:scale-105"
            alt="Artwork of studio single Paradox from State Of Neptune."
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
            Paradox
          </span>

          <div q:slot="subtitle" class="mt-2 flex justify-center gap-6">
            <a
              class="font-body focus-within:text-accent hover:text-accent text-lg transition-all"
              href="https://open.spotify.com/intl-it/track/3WOSwVvksJJAwzCqxNPLGz"
              aria-label="Listen to Paradox on Spotify."
              target="_blank"
            >
              <FaIcon icon={faSpotify}></FaIcon>
            </a>

            <a
              class="font-body focus-within:text-accent hover:text-accent text-lg transition-all"
              href="https://stateofneptune.bandcamp.com/track/paradox"
              aria-label="Listen to Paradox on Bandcamp."
              target="_blank"
            >
              <FaIcon icon={faBandcamp}></FaIcon>
            </a>

            <a
              class="font-body focus-within:text-accent hover:text-accent text-lg transition-all"
              href="https://music.apple.com/it/album/paradox/1626288912?i=1626288918"
              aria-label="Listen to Paradox on Apple Music."
              target="_blank"
            >
              <FaIcon icon={faItunesNote}></FaIcon>
            </a>
          </div>
        </Card>

        <Card
          id="fury"
          href="https://stateofneptune.bandcamp.com/track/fury"
          external
        >
          <FuryArtwork
            q:slot="image"
            class="w-96 transition-transform group-focus-within:scale-105 group-hover:scale-105"
            alt="Artwork of studio single Fury from State Of Neptune."
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
            Fury
          </span>

          <div q:slot="subtitle" class="mt-2 flex justify-center gap-6">
            <a
              class="font-body focus-within:text-accent hover:text-accent text-lg transition-all"
              href="https://open.spotify.com/intl-it/track/5enA2D0PU6UqcRVZLZdRQa"
              aria-label="Listen to Fury on Spotify."
              target="_blank"
            >
              <FaIcon icon={faSpotify}></FaIcon>
            </a>

            <a
              class="font-body focus-within:text-accent hover:text-accent text-lg transition-all"
              href="https://stateofneptune.bandcamp.com/track/fury"
              aria-label="Listen to Fury on Bandcamp."
              target="_blank"
            >
              <FaIcon icon={faBandcamp}></FaIcon>
            </a>

            <a
              class="font-body focus-within:text-accent hover:text-accent text-lg transition-all"
              href="https://music.apple.com/it/album/fury/1626288912?i=1626288915"
              aria-label="Listen to Fury on Apple Music."
              target="_blank"
            >
              <FaIcon icon={faItunesNote}></FaIcon>
            </a>
          </div>
        </Card>
      </div>
    </>
  );
});
