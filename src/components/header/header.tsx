import { component$, useContext, $, useTask$ } from "@builder.io/qwik";
import { inlineTranslate } from "qwik-speak";
import { ChangeLocale } from "../change-locale/change-locale";
import { ThemeContext, DrawerIdContext } from "~/root";
import { LuMoon, LuSun, LuHome, LuMenu } from "@qwikest/icons/lucide";
import { isBrowser } from "@builder.io/qwik/build";

export const HeaderMenu = component$(() => {
  const t = inlineTranslate();

  return (
    <ul class="dui-menu dui-menu-vertical max-lg:p-4 max-lg:w-80 min-h-full bg-base-200 text-base-content lg:px-1 lg:dui-menu-horizontal lg:rounded-box">
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
          <div class="flex items-center flex-nowrap">{t("app.nav.work")}</div>
        </a>
      </li>
      <li>
        <a href="#about">
          <div class="flex items-center flex-nowrap">{t("app.nav.about")}</div>
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
  );
});

export const Header = component$(() => {
  const theme = useContext(ThemeContext);
  const drawerId = useContext(DrawerIdContext);

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
    <header class="dui-navbar bg-base-200 sm:px-20 md:px-36 lg:px-56 xl:px-96">
      <div class="dui-navbar-start">
        <label
          for={drawerId.value}
          class="dui-btn dui-btn-ghost dui-drawer-button px-2 mr-1 lg:hidden"
          aria-label="open sidebar"
        >
          <LuMenu class="h-6 w-6" />
        </label>
        <a class="text-xl no-underline" href="/">
          Arleyro
        </a>
      </div>
      <div class="dui-navbar-center hidden lg:flex">
        <HeaderMenu />
      </div>
      <div class="dui-navbar-end flex justify-end">
        <ChangeLocale />
        <button
          class="dui-btn dui-btn-ghost dui-btn-circle ml-5"
          onClick$={handleThemeChange}
          aria-label="theme change button"
        >
          <label
            class={`dui-swap dui-swap-rotate ${theme.value === "winter" && "dui-swap-active"}`}
          >
            <div class="dui-swap-on">
              <LuSun class="h-6 w-6" />
            </div>
            <div class="dui-swap-off">
              <LuMoon class="h-6 w-6" />
            </div>
          </label>
        </button>
      </div>
    </header>
  );
});
