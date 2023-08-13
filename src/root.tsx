import {
  component$,
  useContextProvider,
  useSignal,
  useStore,
} from "@builder.io/qwik";

import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import type { MenuContextStore } from "./contexts/menu-context";
import { MenuContext } from "./contexts/menu-context";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  const menuStore = useStore<MenuContextStore>({
    dialogRef: useSignal<HTMLDialogElement | undefined>(),
    open: false,
  });

  useContextProvider(MenuContext, menuStore);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body
        lang="en"
        class={[
          "flex min-h-[100dvh] flex-col scroll-smooth bg-deep-bg text-body before:fixed before:inset-0 before:-z-10 before:h-[100lvh] before:w-full before:bg-[linear-gradient(rgba(13,13,13,0.95),rgba(13,13,13,0.95)),url(/images/backgrounds/umbilical.webp)] before:bg-cover before:bg-center before:content-['']",
          menuStore.open && "overflow-hidden",
        ]}
      >
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
