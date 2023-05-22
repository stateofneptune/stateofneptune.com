import { component$, createContextId, Slot, useContextProvider, useStore } from "@builder.io/qwik";

import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";
import Menu from "~/components/menu/menu";

export type MenuContextStore = {
  open: boolean;
}

export const MenuContext = createContextId<MenuContextStore>('ui.menu')

export default component$(() => {
  const menuStore = useStore<MenuContextStore>({
    open: false
  })

  useContextProvider(MenuContext, menuStore)

  return (
    <>
      <Header />
      <Menu />
      <main class="py-16 px-8">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
