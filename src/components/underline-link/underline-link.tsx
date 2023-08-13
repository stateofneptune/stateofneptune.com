import { ClassList, Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface UnderlineLinkProps {
  class?: ClassList;
  href?: string;
}

export default component$((props: UnderlineLinkProps) => {
  return (
    <>
      <Link
        class="font-body decoration-accent underline-offset-2 focus-within:underline hover:underline"
        href={props.href}
      >
        <span class={props.class}>
          <Slot />
        </span>
      </Link>
    </>
  );
});
