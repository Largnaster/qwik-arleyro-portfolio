import { $, component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import {
  useDisplayName,
  useSpeakConfig,
  useSpeakLocale,
  useTranslate
} from "qwik-speak";

import type { SpeakLocale } from "qwik-speak";
import { Button } from "../common/Button";

export const ChangeLocale = component$(() => {
  const t = useTranslate();
  const dn = useDisplayName();

  const loc = useLocation();

  const locale = useSpeakLocale();
  const config = useSpeakConfig();

  const navigateByLocale$ = $((newLocale: SpeakLocale) => {
    const url = new URL(location.href);
    if (loc.params.lang) {
      if (newLocale.lang !== config.defaultLocale.lang) {
        url.pathname = url.pathname.replace(loc.params.lang, newLocale.lang);
      } else {
        url.pathname = url.pathname.replace(
          new RegExp(`(/${loc.params.lang}/)|(/${loc.params.lang}$)`),
          "/"
        );
      }
    } else if (newLocale.lang !== config.defaultLocale.lang) {
      url.pathname = `/${newLocale.lang}${url.pathname}`;
    }

    location.href = url.toString();
  });

  return (
    <div>
      <h2>{t("app.changeLocale")}</h2>
      <div>
        {config.supportedLocales.map((langOption) => (
          <Button
            key={langOption.lang}
            class={{ active: langOption.lang == locale.lang }}
            onClick$={async () => await navigateByLocale$(langOption)}
          >
            {dn(langOption.lang, { type: "language" })}
          </Button>
        ))}
      </div>
    </div>
  );
});
