import {
  type Signal,
  component$,
  createContextId,
  useSignal,
  useContextProvider
} from "@builder.io/qwik";
import { QwikSpeakProvider } from "qwik-speak";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { config } from "./speak-config";

import "./global.css";
import { translationFn } from "./speak-functions";

export const ThemeContext = createContextId<Signal<string>>("theme");

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  const defaultTheme = "light";

  const theme = useSignal(defaultTheme);

  useContextProvider(ThemeContext, theme);

  return (
    <QwikSpeakProvider config={config} translationFn={translationFn}>
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
    </QwikSpeakProvider>
  );
});
