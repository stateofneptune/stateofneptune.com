import { Slot, component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FaIcon } from "qwik-fontawesome";

export interface HeaderNavItemProps {
  href: string;
  external?: boolean;
}

export default component$((props: HeaderNavItemProps) => {
  const loc = useLocation();

  return (
    <>
      {props.external ? (
        <a
          href={props.href}
          class={[
            "focus-within:text-accent hover:text-accent transition-all",
            loc.url.pathname === props.href && "text-accent",
          ]}
          target="_blank"
        >
          <Slot />{" "}
          <FaIcon class="fill-body w-2 rotate-45" icon={faArrowUp}></FaIcon>
        </a>
      ) : (
        <Link
          href={props.href}
          class={[
            "focus-within:text-accent hover:text-accent transition-all",
            loc.url.pathname === props.href && "text-accent",
          ]}
        >
          <Slot />
        </Link>
      )}
    </>
  );
});
