import { component$, useContext, $ } from "@builder.io/qwik";

import { MenuContext } from "~/contexts/menu-context";
import { MenuCloseIcon } from "../icons/menu-close";

import MenuNavItem from "../menu-nav-item/menu-nav-item";

export default component$(() => {
  const menuContext = useContext(MenuContext);

  const closeMenu = $(() => {
    menuContext.dialogRef.value?.close();
    menuContext.open = false;
  });

  return (
    <>
      <dialog
        class={[
          "text-body duration-menu-open backdrop:bg-deep-bg/90 backdrop:duration-menu-open fixed m-0 h-full max-h-[100ldh] w-full max-w-[100lvw] overflow-y-auto bg-transparent p-0 transition-[opacity] backdrop:backdrop-blur-lg backdrop:transition-[opacity]",
          menuContext.open
            ? "opacity-100 backdrop:opacity-100"
            : "opacity-0 backdrop:opacity-0",
        ]}
        ref={menuContext.dialogRef}
        onClick$={closeMenu}
      >
        <div class="mb-4 flex justify-end p-4">
          <button
            aria-label="close"
            class={[
              "text-body delay-menu-open h-8 w-8 transition-[opacity] duration-1000",
              menuContext.open ? "opacity-100" : "opacity-0",
            ]}
            onClick$={closeMenu}
          >
            <MenuCloseIcon />
          </button>
        </div>

        <nav>
          <ul>
            <li>
              <MenuNavItem href="/about/">About</MenuNavItem>
            </li>

            <li>
              <MenuNavItem href="/discography/">Discography</MenuNavItem>
            </li>

            <li>
              <MenuNavItem href="/videos/">Videos</MenuNavItem>
            </li>

            <li>
              <MenuNavItem href="/tour/">Tour</MenuNavItem>
            </li>

            <li>
              <MenuNavItem
                href="https://bandcamp.com/contact?b=1895537099&n=State%20Of%20Neptune"
                external
              >
                Contact
              </MenuNavItem>
            </li>
          </ul>
        </nav>
      </dialog>
    </>
  );
});
