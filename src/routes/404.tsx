import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Paragraph from "~/components/paragraph/paragraph";
import UnderlineLink from "~/components/underline-link/underline-link";
import Title from "~/components/title/title";

export default component$(() => {
  return (
    <>
      <Title>404 – Not Found</Title>

      <section class="my-12 flex justify-center px-6">
        <div class="flex w-[50ch] flex-col items-center gap-6">
          <Paragraph align="center">
            Hey! The content you were looking for is not available or has been
            removed. If you think something is broken, report a problem.
          </Paragraph>

          <div class="flex items-center justify-center gap-6">
            <UnderlineLink class="w-[12ch] text-dim" href="/">
              Home
            </UnderlineLink>

            <UnderlineLink class="w-[12ch] text-dim" href="/contact/">
              Contact us
            </UnderlineLink>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "404 – Not Found",
  meta: [],
};
