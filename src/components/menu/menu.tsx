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
          "fixed m-0 h-full max-h-[100ldh] w-full max-w-[100lvw] overflow-y-auto bg-transparent p-0 text-body transition-[opacity] duration-menu-open backdrop:bg-deep-bg/90 backdrop:backdrop-blur-lg backdrop:transition-[opacity] backdrop:duration-menu-open",
          menuContext.open
            ? "opacity-100 backdrop:opacity-100"
            : "opacity-0 backdrop:opacity-0",
        ]}
        ref={menuContext.dialogRef}
        onClick$={closeMenu}
      >
        <div class="mb-4 flex justify-end p-2">
          <button
            aria-label="close"
            class={[
              "h-8 w-8 text-body transition-[opacity] delay-menu-open duration-1000",
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
              <MenuNavItem href="/music/">Music</MenuNavItem>
            </li>

            <li>
              <MenuNavItem href="/videos/">Videos</MenuNavItem>
            </li>

            <li>
              <MenuNavItem href="/contact/">Contact</MenuNavItem>
            </li>
          </ul>
        </nav>
      </dialog>
    </>
  );
});
