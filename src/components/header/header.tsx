import { component$, useContext, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { MenuContext } from "~/contexts/menu-context";
import { MenuBurgerIcon } from "../icons/menu-burger";

import StateOfNeptuneLogo from "/public/images/logo/state-of-neptune-wht-inline.png?jsx";
import HeaderNavItem from "../header-nav-item/header-nav-item";

export default component$(() => {
  const menuContext = useContext(MenuContext);

  const openMenu = $(() => {
    menuContext.dialogRef.value?.showModal();
    menuContext.open = true;
  });

  return (
    <>
      <header class="bg-deep-bg sticky top-0 z-90 w-full p-4 transition-all md:flex md:flex-col md:justify-between md:gap-4">
        <div class="relative flex items-center justify-center">
          <div class="absolute right-0 md:hidden">
            <button
              aria-label="menu"
              class="text-body h-8 w-8 transition"
              onClick$={openMenu}
            >
              <MenuBurgerIcon />
            </button>
          </div>

          <Link href="/">
            <StateOfNeptuneLogo
              class="h-10 w-fit object-scale-down transition-all md:h-12 lg:h-14"
              alt="State Of Neptune logo."
            />
          </Link>
        </div>

        <nav class="font-body hidden justify-center text-lg md:flex">
          <ul class="flex justify-center gap-12 transition-all lg:gap-14">
            <li>
              <HeaderNavItem href="/about/">About</HeaderNavItem>
            </li>

            <li>
              <HeaderNavItem href="/discography/">Discography</HeaderNavItem>
            </li>

            <li>
              <HeaderNavItem href="/videos/">Videos</HeaderNavItem>
            </li>

            <li>
              <HeaderNavItem href="/tour/">Tour</HeaderNavItem>
            </li>

            <li>
              <HeaderNavItem
                href="https://bandcamp.com/contact?b=1895537099&n=State%20Of%20Neptune"
                external
              >
                Contact
              </HeaderNavItem>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
});
