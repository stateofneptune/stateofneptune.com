import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Paragraph from "~/components/paragraph/paragraph";
import UnderlineLink from "~/components/underline-link/underline-link";
import Title from "~/components/title/title";

export default component$(() => {
  return (
    <>
      <Title>Thank You</Title>

      <section class="my-12 flex justify-center px-6">
        <div class="flex w-[50ch] flex-col items-center gap-6">
          <Paragraph align="center">
            Your message was submitted successfully. We will respond to you
            within 5 business days. Please check your inbox.
          </Paragraph>

          <div class="flex items-center justify-center gap-6">
            <UnderlineLink class="w-[12ch] text-dim" href="/">
              Home
            </UnderlineLink>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Thank You",
  meta: [],
};
