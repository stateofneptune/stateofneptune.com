import { ClassList, Signal, Slot } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

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

        <a
          href={props.href}
          class="font-body text-lg transition-all focus-within:text-accent hover:text-accent"
          target="_blank"
        >
          {props.title}
        </a>
      </div>
    </>
  );
});
