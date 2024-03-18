import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Title from "~/components/title/title";
import YouTube from "~/components/you-tube/you-tube";

export default component$(() => {
  return (
    <>
      <Title>Videos</Title>

      <section class="my-12 flex w-full justify-center px-6">
        <div class="flex w-[80rem] flex-wrap justify-center gap-16">
          <YouTube src="https://www.youtube-nocookie.com/embed/u7uWaHhZ_Yk" />
          <YouTube src="https://www.youtube-nocookie.com/embed/n-qIKsquRik" />
          <YouTube src="https://www.youtube-nocookie.com/embed/Ff3ebB6Un8M" />
          <YouTube src="https://www.youtube-nocookie.com/embed/0Qx5mPyOGgc" />
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Videos",
  meta: [
    {
      name: "description",
      content: "State Of Neptune videos.",
    },
    {
      property: "og:description",
      content: "State Of Neptune videos.",
    },
    {
      property: "og:url",
      content: "https://www.stateofneptune.com/videos",
    },
    {
      property: "twitter:description",
      content: "State Of Neptune videos.",
    },
  ],
};
