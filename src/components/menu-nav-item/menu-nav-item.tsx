import { Slot, component$ } from "@builder.io/qwik";
import type { LinkProps } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export interface MenuNavItemProps {
  href: string;
  onClick$?: LinkProps["onClick$"];
  external?: boolean;
}

export default component$((props: MenuNavItemProps) => {
  return (
    <>
      {props.external ? (
        <a
          href={props.href}
          class="font-body focus-within:bg-light-bg/20 hover:bg-light-bg/20 block p-3 text-center text-xl transition"
          onClick$={props.onClick$}
          target="_blank"
        >
          <Slot />
        </a>
      ) : (
        <Link
          href={props.href}
          class="font-body focus-within:bg-light-bg/20 hover:bg-light-bg/20 block p-3 text-center text-xl transition"
          onClick$={props.onClick$}
        >
          <Slot />
        </Link>
      )}
    </>
  );
});
