import type { ClassList, Signal } from "@builder.io/qwik";
import { Slot } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

export interface CardProps {
  id?: string;
  class?: ClassList | Signal<ClassList>;
  href: string;
}
export default component$((props: CardProps) => {
  return (
    <>
      <div
        id={props.id}
        class="flex flex-col content-center items-center justify-center gap-y-6"
      >
        <figure>
          <a href={props.href} target="_blank">
            <Slot name="image" />
          </a>
        </figure>

        <div class="flex flex-col items-center">
          <a href={props.href} target="_blank">
            <Slot name="title" />
          </a>

          <Slot name="subtitle" />
        </div>
      </div>
    </>
  );
});
