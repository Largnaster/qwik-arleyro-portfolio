import { component$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";

export default component$(() => {
  const t = useTranslate();

  return (
    <div>
      <h2>{t("app.about.title")}</h2>
      <div>
        <div class="large">{t("app.about.location")}</div>
        <p>{t("app.about.myDescription")}</p>
      </div>
    </div>
  );
});
