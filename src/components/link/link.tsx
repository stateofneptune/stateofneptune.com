import type { ClassList } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface LinkProps {
  class?: ClassList;
  "aria-label"?: string;
  href?: string;
  external?: boolean;
}

export default component$((props: LinkProps) => {
  return (
    <>
      {props.external ? (
        <a
          class={props.class}
          href={props.href}
          target="_blank"
          aria-label={props["aria-label"]}
        >
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
