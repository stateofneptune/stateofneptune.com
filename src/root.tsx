import { component$, useContextProvider, useStore } from "@builder.io/qwik";

import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import { MenuContext, MenuContextStore } from "./contexts/menu-context";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  const menuStore = useStore<MenuContextStore>({
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
          "flex min-h-[100dvh] flex-col scroll-smooth bg-deep-bg text-body",
          menuStore.open && "overflow-hidden",
        ]}
      >
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
