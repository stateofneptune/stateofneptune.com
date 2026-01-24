import type { JSXOutput } from "@builder.io/qwik";

import NowIRememberMyFaceAgainArtwork from "/public/images/artworks/now-i-remember-my-face-again.jpg?jsx";
import KillersplinterArtwork from "/public/images/artworks/killersplinter.png?jsx";
import PulpOfStonesArtwork from "/public/images/artworks/pulp-of-stones.jpg?jsx";

export type Release = {
  id: string;
  image: JSXOutput;
  href: string;
  label: string;
  title: string;
  type: "album" | "single";
  links: {
    href: string;
    label: string;
    type: "bandcamp" | "spotify" | "apple-music";
  }[];
  publishDate?: Date;
};

export const RELEASES: Release[] = [
  {
    id: "now-i-remember-my-face-again",
    image: (
      <NowIRememberMyFaceAgainArtwork alt="Artwork of studio single Now I Remember My Face Again from State Of Neptune." />
    ),
    href: "https://open.spotify.com/album/13cRIsGpfSPB3PM4TpTvfl",
    label: `Listen to Now I Remember My Face Again on Spotify.`,
    title: "Now I Remember My Face Again",
    type: "single",
    links: [
      {
        href: "https://open.spotify.com/album/13cRIsGpfSPB3PM4TpTvfl",
        label: `Listen to Now I Remember My Face Again on Spotify.`,
        type: "spotify",
      },
      {
        href: "https://music.apple.com/pl/album/now-i-remember-my-face-again-single/1857928875",
        label: `Listen to Now I Remember My Face Again on Apple Music.`,
        type: "apple-music",
      },
    ],
  },
  {
    id: "killersplinter",
    title: "Killersplinter",
    image: (
      <KillersplinterArtwork alt="Artwork of studio single Killersplinter from State Of Neptune." />
    ),
    href: "https://open.spotify.com/album/2OMOeiW7O5v4ikLeWABxWs",
    label: "Listen to Killersplinter on Spotify.",
    type: "single",
    links: [
      {
        href: "https://open.spotify.com/album/2OMOeiW7O5v4ikLeWABxWs",
        label: "Listen to Killersplinter on Spotify.",
        type: "spotify",
      },
      {
        href: "https://music.apple.com/pl/album/killersplinter-single/1844327013",
        label: "Listen to Killersplinter on Apple Music.",
        type: "apple-music",
      },
    ],
  },
  {
    id: "pulp-of-stones",
    title: "Pulp Of Stones",
    type: "album",
    image: (
      <PulpOfStonesArtwork alt="Artwork of studio album Pulp Of Stones from State Of Neptune." />
    ),
    href: "https://open.spotify.com/intl-it/album/2UBy8Aw3gQkk3oRe8ytybE",
    label: "Listen to Killersplinter on Spotify.",
    links: [
      {
        href: "https://open.spotify.com/intl-it/album/2UBy8Aw3gQkk3oRe8ytybE",
        label: `Listen to Pulp Of Stones on Spotify.`,
        type: "spotify",
      },
      {
        href: "https://stateofneptune.bandcamp.com/album/pulp-of-stones",
        label: `Listen to Pulp Of Stones on Bandcamp.`,
        type: "bandcamp",
      },
      {
        href: "https://music.apple.com/it/album/pulp-of-stones/1626288912",
        label: `Listen to Pulp Of Stones on Apple Music.`,
        type: "apple-music",
      },
    ],
  },
];
