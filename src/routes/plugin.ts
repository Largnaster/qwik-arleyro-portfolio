import type { RequestHandler } from "@builder.io/qwik-city";

import { config } from "~/speak-config";

export const onRequest: RequestHandler = ({ params, locale }) => {
  const lang = params.lang;

  locale(lang || config.defaultLocale.lang);
};
