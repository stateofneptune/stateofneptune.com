import { component$, useContext, $ } from "@builder.io/qwik";

import { MenuContext } from "~/contexts/menu-context";
import { MenuCloseIcon } from "../icons/menu-close";

import MenuNavItem from "../menu-nav-item/menu-nav-item";

export default component$(() => {
  const menuContext = useContext(MenuContext);
  const closeMenu = $(() => (menuContext.open = false));

  return (
    <>
      <div
        class={[
          "fixed right-0 top-0 z-10 h-full w-full overflow-y-auto bg-deep-bg/90 transition-[opacity_backdrop-blur_visibility] duration-300 will-change-[opacity,backdrop-filter]",
          menuContext.open
            ? "visible opacity-100 backdrop-blur-sm"
            : "invisible opacity-0",
        ]}
        onClick$={closeMenu}
      >
        <div class="mb-4 flex justify-end p-2">
          <button
            class={[
              "h-8 w-8 transition delay-300",
              menuContext.open
                ? "text-body/100 duration-1000"
                : "text-body/0 duration-0",
            ]}
            onClick$={closeMenu}
          >
            <MenuCloseIcon />
          </button>
        </div>

        <nav>
          <ul>
            <li>
              <MenuNavItem href="/" onClick$={closeMenu}>
                Home
              </MenuNavItem>
            </li>

            <li>
              <MenuNavItem href="/music" onClick$={closeMenu}>
                Music
              </MenuNavItem>
            </li>

            <li>
              <MenuNavItem href="/videos" onClick$={closeMenu}>
                Videos
              </MenuNavItem>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
});
