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
      <header class="sticky top-0 z-10 w-full bg-deep-bg p-2 transition-all md:flex md:flex-col md:justify-between md:gap-4 md:p-4">
        <div class="relative flex items-center justify-center">
          <div class="absolute right-0 md:hidden">
            <button
              aria-label="menu"
              class="h-8 w-8 text-body transition"
              onClick$={openMenu}
            >
              <MenuBurgerIcon />
            </button>
          </div>

          <Link href="/">
            <StateOfNeptuneLogo class="h-10 w-fit transition-all md:h-12 lg:h-14" />
          </Link>
        </div>

        <nav class="hidden justify-center font-body text-lg md:flex">
          <ul class="flex justify-center gap-12 transition-all lg:gap-14">
            <li>
              <HeaderNavItem href="/discography">Discography</HeaderNavItem>
            </li>

            <li>
              <HeaderNavItem href="/videos/">Videos</HeaderNavItem>
            </li>

            <li>
              <HeaderNavItem href="/tour/">Tour</HeaderNavItem>
            </li>

            <li>
              <HeaderNavItem href="/contact/">Contact</HeaderNavItem>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
});
