import type { SpeakConfig } from "qwik-speak";

export const config: SpeakConfig = {
  defaultLocale: {
    lang: "en-US",
    currency: "USD",
    timeZone: "America/Los_Angeles",
    units: { length: "meter" },
  },
  supportedLocales: [
    {
      lang: "en-US",
      currency: "USD",
      timeZone: "America/Los_Angeles",
      units: { length: "meter" },
    },
    {
      lang: "es-ES",
      currency: "COP",
      timeZone: "America/Bogota",
      units: { length: "meter" },
    },
  ],
  assets: ["app"],
  runtimeAssets: ["runtime"],
};
