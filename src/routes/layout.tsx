import { component$, Slot } from "@builder.io/qwik";

import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";
import Menu from "~/components/menu/menu";

export default component$(() => {
  return (
    <>
      <Header />
      <Menu />
      <main class="p-6">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
