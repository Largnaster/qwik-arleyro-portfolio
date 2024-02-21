import {
  type Signal,
  component$,
  createContextId,
  useSignal,
  useContextProvider,
  useTask$
} from "@builder.io/qwik";
import { useQwikSpeak } from "qwik-speak";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { config } from "./speak-config";

import "./global.css";
import { translationFn } from "./speak-functions";
import { isBrowser } from "@builder.io/qwik/build";

export const ThemeContext = createContextId<Signal<string>>("theme");

export default component$(() => {
  const defaultTheme = "light";

  const theme = useSignal(defaultTheme);

  useQwikSpeak({ config, translationFn });

  useTask$(() => {
    if (isBrowser) {
      const hasDarkModeSelected =
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      theme.value = hasDarkModeSelected ? "dark" : "light";
    }
  });

  useContextProvider(ThemeContext, theme);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body class={theme}>
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
