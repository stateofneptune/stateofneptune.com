import { component$, Slot } from "@builder.io/qwik";

import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";

import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";
import Menu from "~/components/menu/menu";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 10,
    sMaxAge: 15,
  });
};

export default component$(() => {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = ({ head, url }) => {
  return {
    title: `${head.title} – State Of Neptune`,
    meta: [
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:title",
        content: `${head.title} – State Of Neptune`,
      },
      {
        property: "og:url",
        content: String(url),
      },
      {
        property: "og:image",
        content:
          "https://www.stateofneptune.com/images/logo/state-of-neptune-blk-og.png",
      },
      {
        property: "twitter:title",
        content: `${head.title} – State Of Neptune`,
      },
      {
        property: "twitter:site",
        content: "https://www.stateofneptune.com/",
      },
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:image",
        content:
          "https://www.stateofneptune.com/images/logo/state-of-neptune-blk-card.png",
      },
    ],
  };
};
