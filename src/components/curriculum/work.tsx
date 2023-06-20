import { component$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";

export default component$(() => {
  const t = useTranslate();

  return (
    <div>
      <div>
        <p>{t("app.work.description")}</p>
      </div>
    </div>
  );
});
