import { component$ } from "@builder.io/qwik";

import LiveAtVastoRecordsArtwork from "/public/images/artworks/live-at-vasto-records@640.webp?jsx";
import PulpOfStonesArtwork from "/public/images/artworks/pulp-of-stones@640.webp?jsx";
import ParadoxArtwork from "/public/images/artworks/paradox@640.webp?jsx";
import FuryArtwork from "/public/images/artworks/fury@640.webp?jsx";

import Card from "~/components/card/card";

export default component$(() => {
  return (
    <>
      <div class="flex w-[60rem] flex-wrap justify-center gap-16">
        <Card
          id="live-at-vasto-records"
          href="https://stateofneptune.bandcamp.com/album/live-at-vasto-records"
          external
        >
          <LiveAtVastoRecordsArtwork
            q:slot="image"
            class="w-96"
            alt="Artwork of live album Live at Vasto Records from State Of Neptune."
          />

          <span
            q:slot="title"
            class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
          >
            Live at Vasto Records
          </span>

          <div q:slot="subtitle" class="mt-2 flex justify-center gap-6 ">
            <a
              class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
              href="https://open.spotify.com/intl-it/album/3MOyE8M8ZCjuCbF41sOqDy"
              aria-label="Listen to Live at Vasto Records on Spotify."
            >
              <i class="fab fa-spotify"></i>
            </a>

            <a
              class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
              href="https://stateofneptune.bandcamp.com/album/live-at-vasto-records"
              aria-label="Listen to Live at Vasto Records on Bandcamp."
            >
              <i class="fab fa-bandcamp"></i>
            </a>

            <a
              class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
              href="https://music.apple.com/it/album/live-at-vasto-records-live-at-vasto-records-single/1707288275"
              aria-label="Listen to Live at Vasto Records on Apple Music."
              target="_blank"
            >
              <i class="fab fa-itunes-note"></i>
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
            class="w-96"
            alt="Artwork of studio album Pulp Of Stones from State Of Neptune."
          />

          <span
            q:slot="title"
            class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
          >
            Pulp Of Stones
          </span>

          <div q:slot="subtitle" class="mt-2 flex justify-center gap-6">
            <a
              class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
              href="https://open.spotify.com/intl-it/album/2UBy8Aw3gQkk3oRe8ytybE"
              aria-label="Listen to Pulp Of Stones on Spotify."
              target="_blank"
            >
              <i class="fab fa-spotify"></i>
            </a>

            <a
              class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
              href="https://stateofneptune.bandcamp.com/album/pulp-of-stones"
              aria-label="Listen to Pulp Of Stones on Bandcamp."
              target="_blank"
            >
              <i class="fab fa-bandcamp"></i>
            </a>

            <a
              class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
              href="https://music.apple.com/it/album/pulp-of-stones/1626288912"
              aria-label="Listen to Pulp Of Stones on Apple Music."
              target="_blank"
            >
              <i class="fab fa-itunes-note"></i>
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
            class="w-96"
            alt="Artwork of studio single Paradox from State Of Neptune."
          />

          <span
            q:slot="title"
            class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
          >
            Paradox
          </span>

          <div q:slot="subtitle" class="mt-2 flex justify-center gap-6">
            <a
              class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
              href="https://open.spotify.com/intl-it/track/3WOSwVvksJJAwzCqxNPLGz"
              aria-label="Listen to Paradox on Spotify."
              target="_blank"
            >
              <i class="fab fa-spotify"></i>
            </a>

            <a
              class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
              href="https://stateofneptune.bandcamp.com/track/paradox"
              aria-label="Listen to Paradox on Bandcamp."
              target="_blank"
            >
              <i class="fab fa-bandcamp"></i>
            </a>

            <a
              class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
              href="https://music.apple.com/it/album/paradox/1626288912?i=1626288918"
              aria-label="Listen to Paradox on Apple Music."
              target="_blank"
            >
              <i class="fab fa-itunes-note"></i>
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
            class="w-96"
            alt="Artwork of studio single Fury from State Of Neptune."
          />

          <span
            q:slot="title"
            class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
          >
            Fury
          </span>

          <div q:slot="subtitle" class="mt-2 flex justify-center gap-6">
            <a
              class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
              href="https://open.spotify.com/intl-it/track/5enA2D0PU6UqcRVZLZdRQa"
              aria-label="Listen to Fury on Spotify."
              target="_blank"
            >
              <i class="fab fa-spotify"></i>
            </a>

            <a
              class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
              href="https://stateofneptune.bandcamp.com/track/fury"
              aria-label="Listen to Fury on Bandcamp."
              target="_blank"
            >
              <i class="fab fa-bandcamp"></i>
            </a>

            <a
              class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
              href="https://music.apple.com/it/album/fury/1626288912?i=1626288915"
              aria-label="Listen to Fury on Apple Music."
              target="_blank"
            >
              <i class="fab fa-itunes-note"></i>
            </a>
          </div>
        </Card>
      </div>
    </>
  );
});
