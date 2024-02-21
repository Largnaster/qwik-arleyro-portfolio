import type { RequestHandler } from "@builder.io/qwik-city";
import { validateLocale, extractFromDomain } from "qwik-speak";

import { config } from "~/speak-config";

export const onRequest: RequestHandler = ({ params, locale, error, url }) => {
  let lang: string | undefined = undefined;

  if (params.lang && validateLocale(params.lang)) {
    lang = config.supportedLocales.find(
      (value) => value.lang === params.lang
    )?.lang;

    if (!lang) throw error(404, "Not Found");
  } else {
    lang =
      extractFromDomain(url, config.supportedLocales) ??
      config.defaultLocale.lang;
  }

  locale(lang);
};
