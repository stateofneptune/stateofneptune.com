import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";

import Paragraph from "~/components/paragraph/paragraph";
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

            <Link
              class="decoration-accent underline-offset-2 focus-within:underline hover:underline"
              href="/"
            >
              <span class="font-body text-dim">Home</span>
            </Link>
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
