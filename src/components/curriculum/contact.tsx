import { component$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";

export default component$(() => {
  const t = useTranslate();

  return (
    <div>
      <p>{t("app.contact.description")}</p>
    </div>
  );
});
