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
          class="block p-3 text-center font-subtitle text-lg transition focus-within:bg-zinc-900/70 hover:bg-zinc-900/70"
          onClick$={props.onClick$}
          target="_blank"
        >
          <Slot></Slot>
        </a>
      ) : (
        <Link
          href={props.href}
          class="block p-3 text-center font-subtitle text-lg transition focus-within:bg-zinc-900/70 hover:bg-zinc-900/70"
          onClick$={props.onClick$}
        >
          <Slot></Slot>
        </Link>
      )}
    </>
  );
});
