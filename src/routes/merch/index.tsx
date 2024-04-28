import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Card from "~/components/card/card";
import Title from "~/components/title/title";

import { MERCH } from "./merch";

export default component$(() => {
  return (
    <>
      <Title>Merch</Title>

      <section class="my-12 flex w-full justify-center px-6">
        <div class="flex w-[60rem] flex-wrap justify-center gap-16">
          {MERCH.map((item) => (
            <Card id={item.id} href={item.href}>
              <img
                q:slot="image"
                width="384"
                height="384"
                class="w-96"
                src={item.image}
              />

              <span
                q:slot="title"
                class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
              >
                {item.title}
              </span>

              <div
                q:slot="subtitle"
                class="flex flex-col items-center justify-center font-body text-lg"
              >
                <div class="flex justify-center gap-6 font-body text-lg">
                  {item.sizes?.map((size) => (
                    <span
                      class={size.stock > 0 ? "text-body" : "text-light-bg"}
                    >
                      {size.label}
                    </span>
                  ))}
                </div>

                <span>
                  {item.price ? `€ ${item.price.toFixed(2)}` : "Contact us"}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
});

const META_DESCRIPTION =
  "Palermo, Italy punk stoner trio State Of Neptune's official merch.";

export const head: DocumentHead = {
  title: "Merch",
  meta: ["description", "og:description", "twitter:description"].map(
    (name) => ({
      content: META_DESCRIPTION,
      name,
    })
  ),
};
