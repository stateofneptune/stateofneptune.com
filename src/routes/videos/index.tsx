import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import YouTube from "~/components/you-tube/you-tube";

export default component$(() => {
  return (
    <>
      <section class="flex w-full justify-center">
        <div class="flex w-[80rem] flex-wrap justify-evenly gap-x-16 gap-y-16">
          <YouTube src="https://www.youtube-nocookie.com/embed/Ff3ebB6Un8M" />
          <YouTube src="https://www.youtube-nocookie.com/embed/n-qIKsquRik" />
          <YouTube src="https://www.youtube-nocookie.com/embed/Airh7TekMmY" />
          <YouTube src="https://www.youtube-nocookie.com/embed/0Qx5mPyOGgc" />
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Videos - SON",
  meta: [],
};
