import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import YoutubeEmbed from "~/components/youtube-embed/youtube-embed";

export default component$(() => {
  return (
    <>
      <section class="w-full flex justify-center">
        <div class="w-[80rem] flex justify-evenly flex-wrap gap-y-16 gap-x-16">
          <YoutubeEmbed src="https://www.youtube-nocookie.com/embed/Ff3ebB6Un8M" />
        </div>
      </section>
    </>
  )
});

export const head: DocumentHead = {
  title: "State Of Neptune - Videos",
  meta: [],
};
