import type { ClassList, Signal } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";

import Link from "~/components/link/link";

export interface CardProps {
  id?: string;
  class?: ClassList | Signal<ClassList>;
  href?: string;
  external?: boolean
}

export default component$((props: CardProps) => {
  return (
    <>
      <div
        id={props.id}
        class="flex flex-col content-center items-center justify-center gap-y-6"
      >
        <figure>
          {props.href ? (
            <Link class="font-body decoration-accent underline-offset-2 focus-within:underline hover:underline" href={props.href} external={props.external}>
              <Slot name="image" />
            </Link>
          ) : (
            <Slot name="image" />
          )}
        </figure>

        <div class="flex flex-col items-center">
          {props.href && (
            <Link href={props.href} external={props.external}>
              <Slot name="title" />
            </Link>
          )}

          <Slot name="subtitle" />
        </div>
      </div >
    </>
  );
});
