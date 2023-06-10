import { component$, useContext, $ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

import { MenuContext } from "~/contexts/menu-context";
import { MenuBurgerIcon } from "../icons/menu-burger";

export default component$(() => {
  const loc = useLocation();
  const menuContext = useContext(MenuContext);
  const openMenu = $(() => (menuContext.open = true));

  return (
    <>
      <header class="top-0 w-full bg-deep-bg p-2 transition-all md:flex md:flex-col md:justify-between md:gap-4 md:p-4">
        <div class="relative flex items-center justify-center">
          <div class="absolute right-0 md:hidden">
            <button class="h-8 w-8 text-body transition" onClick$={openMenu}>
              <MenuBurgerIcon />
            </button>
          </div>

          <Link href="/">
            <figure>
              <img
                src="/images/logo/state-of-neptune-wht-inline.png"
                class="h-10 transition-all md:h-12 lg:h-14"
              ></img>
            </figure>
          </Link>
        </div>

        <nav class="hidden justify-center font-subtitle md:flex">
          <ul class="flex justify-center gap-12 transition-all lg:gap-14">
            <li>
              <Link
                href="/"
                class={[
                  "transition-all hover:text-accent",
                  loc.url.pathname === "/" && "text-accent",
                ]}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/music"
                class={[
                  "transition-all hover:text-accent",
                  loc.url.pathname === "/music/" && "text-accent",
                ]}
              >
                Music
              </Link>
            </li>

            <li>
              <Link
                href="/videos"
                class={[
                  "transition-all hover:text-accent",
                  loc.url.pathname === "/videos/" && "text-accent",
                ]}
              >
                Videos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
});
