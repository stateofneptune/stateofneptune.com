import { ClassList, Signal, Slot } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

import UnderlineLink from "../underline-link/underline-link";

export interface CardProps {
  id?: string;
  title: string;
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
            <Slot />
          </a>
        </figure>

        <UnderlineLink class="text-lg" href={props.href} external={true}>
          {props.title}
        </UnderlineLink>
      </div>
    </>
  );
});
