import type { ClassList } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";

import Link from "~/components/link/link";

export interface CardProps {
  id?: string;
  class?: ClassList;
  "aria-label"?: string;
  href?: string;
  external?: boolean;
}

export default component$((props: CardProps) => {
  return (
    <>
      <div
        id={props.id}
        class="flex scroll-mt-64 flex-col content-center items-center justify-center gap-y-6"
      >
        <figure class="group relative overflow-hidden">
          {props.href ? (
            <Link
              href={props.href}
              external={props.external}
              aria-label={props["aria-label"]}
            >
              <div class="absolute inset-0 z-10">
                <Slot name="image-overlay" />
              </div>

              <Slot name="image" />
            </Link>
          ) : (
            <Slot name="image" />
          )}
        </figure>

        <div class="flex flex-col items-center">
          {props.href && (
            <Link
              href={props.href}
              external={props.external}
              aria-label={props["aria-label"]}
            >
              <Slot name="title" />
            </Link>
          )}

          <Slot name="subtitle" />
        </div>
      </div>
    </>
  );
});
