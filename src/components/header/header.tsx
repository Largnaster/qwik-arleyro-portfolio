import { component$, useContext, $, useTask$ } from "@builder.io/qwik";
import { inlineTranslate } from "qwik-speak";
import { ChangeLocale } from "../change-locale/change-locale";
import { ThemeContext } from "~/root";
import { Button } from "../common/Button";
import { LuMoon, LuSun, LuHome, LuMenu } from "@qwikest/icons/lucide";
import { isBrowser } from "@builder.io/qwik/build";

export const Header = component$(() => {
  const t = inlineTranslate();

  const theme = useContext(ThemeContext);

  useTask$(({ track }) => {
    track(theme);

    if (isBrowser) {
      localStorage.theme = theme.value;
    }
  });

  const handleThemeChange = $(() => {
    theme.value = theme.value === "winter" ? "night" : "winter";
  });

  return (
    <header class="dui-navbar bg-base-200 sm:px-20 lg:px-56 xl:px-96">
      <div class="dui-navbar-start">
        <button class="dui-btn dui-btn-ghost lg:hidden">
          <LuMenu class="h-6 w-6" />
        </button>
        <a class="dui-btn dui-btn-ghost text-xl" href="/">
          Arleyro
        </a>
      </div>
      <div class="dui-navbar-center hidden lg:flex">
        <ul class="dui-menu dui-menu-horizontal px-1">
          <li>
            <a href="#introduction">
              <div class="flex items-center flex-nowrap">
                <LuHome class="h-5 w-5" />
                {t("app.nav.home")}
              </div>
            </a>
          </li>
          <li>
            <a href="#work">
              <div class="flex items-center flex-nowrap">
                {t("app.nav.work")}
              </div>
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
      </div>
      <div class="dui-navbar-end">
        <ChangeLocale />
        <Button
          class="ml-auto"
          onClick$={handleThemeChange}
          variant="text"
          aria-label="theme change button"
        >
          <div class="relative inset-0 flex items-center justify-center w-5">
            <LuSun
              class={`absolute h-6 w-6 transition-transform ${
                theme.value === "night" && "hidden"
              }`}
            />
            <LuMoon
              class={`absolute h-6 w-6 transition-transform ${
                theme.value === "winter" && "hidden"
              }`}
            />
          </div>
        </Button>
      </div>
    </header>
  );
});
