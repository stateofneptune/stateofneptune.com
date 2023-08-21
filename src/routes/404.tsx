import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import Paragraph from "~/components/paragraph/paragraph";
import UnderlineLink from "~/components/underline-link/underline-link";
import Title from "~/components/title/title";

export default component$(() => {
  return (
    <>
      <Title>404 Not Found</Title>

      <section class="flex w-full justify-center text-center">
        <div class="flex w-[80ch] flex-col items-center gap-6">
          <Paragraph>
            Hey! The content you were looking for is not available or has been
            removed.
            <br />
            If you think something is broken, report a problem.
          </Paragraph>

          <div class="flex justify-center">
            <div class="w-[12ch]">
              <UnderlineLink class="text-dim" href="/">
                Home
              </UnderlineLink>
            </div>

            <div class="w-[3ch]">
              <UnderlineLink
                class="text-dim"
                href="https://stateofneptune.bandcamp.com/contact?b=1895537099&n=State%20Of%20Neptune"
                external
              >
                Contact us
              </UnderlineLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "404 Not Found - SON",
  meta: [],
};
