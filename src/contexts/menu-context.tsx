import type { Signal } from "@builder.io/qwik";
import { createContextId } from "@builder.io/qwik";

export type MenuContextStore = {
  dialogRef: Signal<HTMLDialogElement | undefined>;
  open: boolean;
};

export const MenuContext = createContextId<MenuContextStore>("ui.menu");
