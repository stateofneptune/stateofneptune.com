import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Title from "~/components/title/title";
import YouTube from "~/components/you-tube/you-tube";

export default component$(() => {
  return (
    <>
      <Title>Videos</Title>

      <section class="flex w-full justify-center">
        <div class="flex w-[80rem] flex-wrap justify-center gap-16">
          <YouTube src="https://www.youtube-nocookie.com/embed/u7uWaHhZ_Yk" />
          <YouTube src="https://www.youtube-nocookie.com/embed/n-qIKsquRik" />
          <YouTube src="https://www.youtube-nocookie.com/embed/Ff3ebB6Un8M" />
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Videos - SON",
  meta: [],
};
