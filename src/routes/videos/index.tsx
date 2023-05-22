import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import YoutubeEmbed from "~/components/youtube-embed/youtube-embed";

export default component$(() => {
  return (
    <>
      <section class="flex w-full justify-center">
        <div class="flex w-[80rem] flex-wrap justify-evenly gap-x-16 gap-y-16">
          <YoutubeEmbed src="https://www.youtube-nocookie.com/embed/Ff3ebB6Un8M" />
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Videos - SON",
  meta: [],
};
