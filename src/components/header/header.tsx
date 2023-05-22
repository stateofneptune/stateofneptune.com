import { component$, useContext, $ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { MenuBurgerIcon } from "../icons/menu-burger";
import { MenuContext } from "~/routes/layout";

export default component$(() => {
  const loc = useLocation();
  const menuContext = useContext(MenuContext)
  const openMenu = $(() => (menuContext.open = true))

  return (
    <>
      <header class="top-0 w-full bg-deep-bg transition-all p-2 md:p-4 md:flex md:flex-col md:gap-4 md:justify-between">
        <div class="relative flex justify-center items-center">
          <div class="absolute right-0 md:hidden">
            <button class="w-8 h-8 text-body transition" onClick$={openMenu}>
              <MenuBurgerIcon />
            </button>
          </div>

          <Link href="/">
            <figure>
              <img src="images/logo/state-of-neptune-wht-inline.png" class="transition-all h-10 md:h-12 lg:h-14"></img>
            </figure>
          </Link>
        </div>

        <nav class="hidden md:flex justify-center font-subtitle">
          <ul class="flex justify-center transition-all gap-12 lg:gap-14">
            <li>
              <Link href="/" class={["transition-all hover:text-accent", loc.url.pathname === "/" && "text-accent"]}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/music" class={["transition-all hover:text-accent", loc.url.pathname === "/music/" && "text-accent"]}>
                Music
              </Link>
            </li>

            <li>
              <Link href="/videos" class={["transition-all hover:text-accent", loc.url.pathname === "/videos/" && "text-accent"]}>
                Videos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
});
