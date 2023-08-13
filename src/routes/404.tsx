import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import Paragraph from "~/components/paragraph/paragraph";
import UnderlineLink from "~/components/underline-link/underline-link";
import Title from "~/components/title/title";

export default component$(() => {
  return (
    <>
      <section class="flex w-full justify-center">
        <div class="flex w-[80ch] flex-col gap-6">
          <Title>Not Found</Title>

          <div class="text-center">
            <Paragraph>
              Hey! It seems the content you were looking for is missing.
            </Paragraph>

            <UnderlineLink class="text-dim" href="/">
              Home
            </UnderlineLink>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "404 - SON",
  meta: [],
};
