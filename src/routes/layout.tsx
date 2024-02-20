import { component$, Slot } from "@builder.io/qwik";

import { DocumentHead } from "@builder.io/qwik-city";

import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";
import Menu from "~/components/menu/menu";

export default component$(() => {
  return (
    <>
      <Header />
      <Menu />
      <main class="p-6">
        <Slot />
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `State Of Neptune – ${head.title}`,
    meta: [
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:title",
        content: `State Of Neptune - ${head.title}`,
      },
      {
        property: "og:image",
        content:
          "https://www.stateofneptune.com/images/logo/state-of-neptune-blk-og.png",
      },
      {
        property: "twitter:title",
        content: `State Of Neptune - ${head.title}`,
      },
      {
        property: "twitter:site",
        content: "https://www.stateofneptune.com",
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
