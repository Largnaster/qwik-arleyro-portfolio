import { component$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";

export default component$(() => {
  const t = useTranslate();

  return (
    <div id="contact">
      <h2>{t("app.contact.title")}</h2>
      <div>
        <p>{t("app.contact.description")}</p>
      </div>
      <div class="large">
        <a href="mailto:arleyro91@gmail.com">arleyro91@gmail.com</a>
      </div>
    </div>
  );
});
