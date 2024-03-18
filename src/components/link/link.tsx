import type { ClassList, Signal } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface LinkProps {
  class?: ClassList | Signal<ClassList>;
  href?: string;
  external?: boolean
}

export default component$((props: LinkProps) => {
  return (
    <>
      {props.external ? (
        <a class={props.class} href={props.href} target="_blank">
          <Slot />
        </a>
      ) : (
        <Link class={props.class} href={props.href}>
          <Slot />
        </Link>
      )}
    </>
  );
});
