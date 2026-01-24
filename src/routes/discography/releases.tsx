import type { JSXOutput } from "@builder.io/qwik";

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
