import { component$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import { useServerTimeLoader } from "~/routes/layout";

export default component$(() => {
  const serverTime = useServerTimeLoader();
  const t = useTranslate();

  return (
    <footer>
      <div class="container">
        <a href="https://qwik.builder.io/" target="_blank" class="anchor">
          <span>{t("app.footer")}</span>
        </a>
        <a href="https://github.com/Largnaster/" target="_blank" class="anchor">
          <span>Largnaster</span>
          <span class="spacer">|</span>
          <span>{serverTime.value.date}</span>
        </a>
      </div>
    </footer>
  );
});
