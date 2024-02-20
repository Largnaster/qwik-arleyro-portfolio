import { $, component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import {
  localizePath,
  useDisplayName,
  useSpeakConfig,
  useSpeakLocale
} from "qwik-speak";

import type { SpeakLocale } from "qwik-speak";
import { Button } from "../common/Button";

export const ChangeLocale = component$(() => {
  const dn = useDisplayName();

  const loc = useLocation();

  const locale = useSpeakLocale();
  const config = useSpeakConfig();
  const getPath = $(localizePath());

  const navigateByLocale$ = $(async (newLocale: SpeakLocale) => {
    const url = loc.url;
    const newPath = await getPath([url.pathname], newLocale.lang);
    url.pathname = newPath[0];

    location.href = url.toString();
  });

  return (
    <div class="button-group">
      {config.supportedLocales.map((langOption) => (
        <Button
          key={langOption.lang}
          onClick$={async () => await navigateByLocale$(langOption)}
          variant="outlined"
          disabled={langOption.lang == locale.lang}
        >
          {dn(langOption.lang, {
            type: "language",
            style: "short",
            languageDisplay: "standard"
          })}
        </Button>
      ))}
    </div>
  );
});
