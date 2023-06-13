import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { useSpeakConfig, useSpeakLocale, useTranslate } from "qwik-speak";
import { ChangeLocale } from "../change-locale/change-locale";
import { BsGlobe } from "@qwikest/icons/bootstrap";
import { ThemeContext } from "~/root";

export const Header = component$(() => {
  const t = useTranslate();

  const pathname = useLocation().url.pathname;
  const lang = useSpeakLocale().lang;
  const config = useSpeakConfig();

  const theme = useContext(ThemeContext);

  const getHref = (name: string) => {
    return lang === config.defaultLocale.lang ? name : `/${lang}${name}`;
  };

  useVisibleTask$(({ track }) => {
    track(theme);

    localStorage.theme = theme.value;
  });

  return (
    <header>
      <ul class="nav-items">
        <li>
          <Link
            href={getHref("/")}
            class={{
              active:
                pathname === "/" ||
                config.supportedLocales.some((locale) =>
                  pathname.endsWith(`${locale.lang}/`)
                )
            }}
          >
            <BsGlobe class="icon" />
            {t("app.nav.home")}
          </Link>
        </li>
        <li>
          <ChangeLocale />
        </li>
      </ul>
      <button
        onClick$={() => {
          theme.value = theme.value === "light" ? "dark" : "light";
        }}
      >
        Check theme
      </button>
    </header>
  );
});