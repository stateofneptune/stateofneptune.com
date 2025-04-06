import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import type { DocumentHead } from "@builder.io/qwik-city";

import StateOfNeptuneLogoHQ from "/public/images/logo/state-of-neptune-wht-inline-hq.png?jsx";

import Heading from "~/components/heading/heading";
import FullDiscography from "~/components/full-discography/full-discography";

const delay = (time: number) => new Promise((res) => setTimeout(res, time));

export default component$(() => {
  const pickupLineText = "It's been a long time...";

  const pickupLine = useSignal("");
  const delayms = 75;

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    for (let i = 0; i < pickupLineText.length; i++) {
      pickupLine.value += pickupLineText.charAt(i);

      await delay(delayms);
    }
  });

  return (
    <>
      <section class="relative flex min-h-[90lvh] justify-center">
        <div
          class={[
            "flex w-[100ch] flex-col justify-center gap-4 md:gap-8",
            "before:absolute before:inset-0 before:-z-10 before:h-full before:w-full",
            "before:bg-[linear-gradient(rgba(13,13,13,0.5),rgba(13,13,13,0.5)),url(/images/backgrounds/now-i-remember-my-face-again-full.webp)]",
            "before:bg-cover before:bg-center before:content-['']",
          ]}
        >
          <div class="flex grow">
            <StateOfNeptuneLogoHQ
              class="self-end p-2"
              alt="State Of Neptune official logo."
            />
          </div>

          <div class="flex grow flex-col justify-between">
            <div class="font-body mb-16 text-center text-2xl lg:text-4xl">
              {pickupLine.value}
              <span class="animate-[blink_1s_steps(2)_infinite]">|</span>
            </div>

            <div class="mb-16 animate-bounce scroll-m-20 text-center md:text-xl lg:scroll-mt-36">
              <a
                href="#discography"
                class="font-body focus-within:text-dim hover:text-dim transition-all"
              >
                <i class="fa-solid fa-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-12 flex justify-center">
        <Heading id="discography">Discography</Heading>
      </section>

      <section class="my-12 flex justify-center px-12">
        <FullDiscography />
      </section>
    </>
  );
});

const META_DESCRIPTION =
  "Palermo, Italy punk stoner trio State Of Neptune's official website \
featuring music, tour dates, videos and more.";

export const head: DocumentHead = {
  title: "Home",
  meta: ["description", "og:description", "twitter:description"].map(
    (name) => ({
      content: META_DESCRIPTION,
      name,
    }),
  ),
};
