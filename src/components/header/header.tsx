import { component$, useContext, useVisibleTask$, $ } from "@builder.io/qwik";
// import { useLocation } from "@builder.io/qwik-city";
// import { useSpeakConfig, useTranslate } from "qwik-speak";
import { useTranslate } from "qwik-speak";
import { ChangeLocale } from "../change-locale/change-locale";
import { ThemeContext } from "~/root";
import { Button } from "../common/Button";
import { LuMoon, LuSun, LuHome } from "@qwikest/icons/lucide";

export const Header = component$(() => {
  const t = useTranslate();

  // const pathname = useLocation().url.pathname;
  // const lang = useSpeakLocale().lang;
  // const config = useSpeakConfig();

  const theme = useContext(ThemeContext);

  // const getHref = (name: string) => {
  //   return lang === config.defaultLocale.lang ? name : `/${lang}${name}`;
  // };

  useVisibleTask$(({ track }) => {
    track(theme);

    localStorage.theme = theme.value;
  });

  const handleThemeChange = $(() => {
    theme.value = theme.value === "light" ? "dark" : "light";
  });

  return (
    <header class="header">
      <ul class="nav-menu-item">
        <li>
          <a href="#introduction">
            <div class="flex items-center flex-nowrap">
              <LuHome class="icon nav" />
              {t("app.nav.home")}
            </div>
          </a>
        </li>
        <li>
          <a href="#work">
            <div class="flex items-center flex-nowrap">{t("app.nav.work")}</div>
          </a>
        </li>
        <li>
          <a href="#about">
            <div class="flex items-center flex-nowrap">
              {t("app.nav.about")}
            </div>
          </a>
        </li>
        <li>
          <a href="#contact">
            <div class="flex items-center flex-nowrap">
              {t("app.nav.contact")}
            </div>
          </a>
        </li>
      </ul>
      <div class="button-group">
        <ChangeLocale />
        <Button
          class="ml-auto"
          onClick$={handleThemeChange}
          variant="text"
          aria-label="theme"
        >
          <div class="relative inset-0 flex items-center justify-center w-5">
            <LuSun
              class={`absolute theme-icon transition-transform ${
                theme.value === "light" ? "active" : ""
              }`}
            />
            <LuMoon
              class={`absolute theme-icon transition-transform ${
                theme.value === "dark" ? "active" : ""
              }`}
            />
          </div>
        </Button>
      </div>
    </header>
  );
});
