import { Signal, createContextId } from "@builder.io/qwik";

export type MenuContextStore = {
  dialogRef: Signal<HTMLDialogElement | undefined>;
  open: boolean;
};

export const MenuContext = createContextId<MenuContextStore>("ui.menu");
