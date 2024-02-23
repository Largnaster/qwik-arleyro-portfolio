import {
  type Signal,
  component$,
  createContextId,
  useSignal,
  useContextProvider,
  useTask$,
  useStyles$
} from "@builder.io/qwik";
import { useQwikSpeak } from "qwik-speak";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { config } from "./speak-config";

import globalStyles from "./global.css?inline";
import { translationFn } from "./speak-functions";
import { isBrowser } from "@builder.io/qwik/build";
import { HeaderMenu } from "./components/header/header";

export const ThemeContext = createContextId<Signal<string>>("theme");

export const DrawerIdContext = createContextId<Signal<string>>("drawerId");

export default component$(() => {
  useStyles$(globalStyles);

  const defaultTheme = "winter";

  const theme = useSignal(defaultTheme);
  const drawerId = useSignal("toggle-drawer");

  useQwikSpeak({ config, translationFn });

  useTask$(() => {
    if (isBrowser) {
      const hasDarkModeSelected =
        localStorage.theme === "night" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      theme.value = hasDarkModeSelected ? "night" : "winter";
    }
  });

  useContextProvider(ThemeContext, theme);
  useContextProvider(DrawerIdContext, drawerId);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body data-theme={theme}>
        <div class="dui-drawer">
          <input
            type="checkbox"
            id={drawerId.value}
            class="dui-drawer-toggle"
          />
          <div class="dui-drawer-content">
            <RouterOutlet />
            <ServiceWorkerRegister />
          </div>
          <div class="dui-drawer-side">
            <label
              for={drawerId.value}
              class="dui-drawer-overlay"
              aria-label="close sidebar"
            ></label>
            <HeaderMenu />
          </div>
        </div>
      </body>
    </QwikCityProvider>
  );
});
