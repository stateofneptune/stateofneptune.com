import { Slot, component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export interface HeaderNavItemProps {
  href: string;
}

export default component$((props: HeaderNavItemProps) => {
  const loc = useLocation();

  return (
    <>
      <Link
        href={props.href}
        class={[
          "transition-all focus-within:text-accent hover:text-accent",
          loc.url.pathname === props.href && "text-accent",
        ]}
      >
        <Slot></Slot>
      </Link>
    </>
  );
});
