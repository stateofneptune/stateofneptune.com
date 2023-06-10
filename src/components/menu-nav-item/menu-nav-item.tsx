import { Slot, component$ } from "@builder.io/qwik";
import { Link, LinkProps } from "@builder.io/qwik-city";

export interface MenuNavItemProps {
  href: string;
  onClick$?: LinkProps["onClick$"];
}

export default component$((props: MenuNavItemProps) => {
  return (
    <>
      <Link
        href={props.href}
        class="block p-3 text-center font-subtitle text-lg transition hover:bg-zinc-900/70"
        onClick$={props.onClick$}
      >
        <Slot></Slot>
      </Link>
    </>
  );
});
