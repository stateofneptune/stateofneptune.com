import { createContextId } from "@builder.io/qwik";

export type MenuContextStore = {
  open: boolean;
};

export const MenuContext = createContextId<MenuContextStore>("ui.menu");
