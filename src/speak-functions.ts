import { server$ } from "@builder.io/qwik-city";
import { isDev } from "@builder.io/qwik/build";
import type { LoadTranslationFn, Translation, TranslationFn } from "qwik-speak";

const translationData = import.meta.glob<Translation>("/i18n/**/*.json");

const loadTranslation$: LoadTranslationFn = server$(
  (lang: string, asset: string) => {
    const langAsset = `/i18n/${lang}/${asset}.json`;
    if (langAsset in translationData) return translationData[langAsset]();

    if (isDev) {
      console.warn(`Translation asset not found: ${langAsset}`);
    }

    return null;
  }
);

export const translationFn: TranslationFn = {
  loadTranslation$: loadTranslation$
};
