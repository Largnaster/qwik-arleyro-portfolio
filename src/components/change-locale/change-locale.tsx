import { $, component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import {
  localizePath,
  useDisplayName,
  useSpeakConfig,
  useSpeakLocale
} from "qwik-speak";
import { LuLanguages } from "@qwikest/icons/lucide";
import type { SpeakLocale } from "qwik-speak";

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
    <ul class="dui-menu dui-menu-horizontal bg-base-200 dui-rounded-box">
      <li>
        <details>
          <summary>
            <LuLanguages class="h-5 w-5" />
          </summary>
          <ul>
            {config.supportedLocales.map((langOption) => (
              <li key={langOption.lang}>
                <button
                  class={`dui-btn dui-btn-ghost ${locale.lang === langOption.lang && "dui-btn-disabled"}`}
                  onClick$={async () => await navigateByLocale$(langOption)}
                >
                  {dn(langOption.lang, {
                    type: "language",
                    style: "short",
                    languageDisplay: "standard"
                  })}
                </button>
              </li>
            ))}
          </ul>
        </details>
      </li>
    </ul>
  );
});
