import type { ClassList} from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface UnderlineLinkProps {
  class?: ClassList;
  href?: string;
  external?: boolean;
}

export default component$((props: UnderlineLinkProps) => {
  return (
    <>
      {props.external ? (
        <a
          class="font-body decoration-accent underline-offset-2 focus-within:underline hover:underline"
          href={props.href}
          target="_blank"
        >
          <span class={props.class}>
            <Slot />
          </span>
        </a>
      ) : (
        <Link
          class="font-body decoration-accent underline-offset-2 focus-within:underline hover:underline"
          href={props.href}
        >
          <span class={props.class}>
            <Slot />
          </span>
        </Link>
      )}
    </>
  );
});
