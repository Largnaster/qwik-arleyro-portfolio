import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { useSpeakConfig, useSpeakLocale, useTranslate } from "qwik-speak";
import { ChangeLocale } from "../change-locale/change-locale";
import { ThemeContext } from "~/root";
import { Button } from "../common/Button";
import { LuMoon, LuSun, LuHome } from "@qwikest/icons/lucide";

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
    <header class="header">
      <ul class="nav-menu-item">
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
            <div class="flex items-center flex-nowrap">
              <LuHome class="icon nav" />
              {t("app.nav.home")}
            </div>
          </Link>
        </li>
      </ul>
      <div class="button-group">
        <ChangeLocale />
        <Button
          class="ml-auto"
          onClick$={() => {
            theme.value = theme.value === "light" ? "dark" : "light";
          }}
          variant="text"
          aria-label="theme"
        >
          {theme.value === "light" ? (
            <LuSun class="w-6 h-6" />
          ) : (
            <LuMoon class="w-6 h-6" />
          )}
        </Button>
      </div>
    </header>
  );
});
