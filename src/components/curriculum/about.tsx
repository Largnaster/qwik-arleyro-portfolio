import { component$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";

export default component$(() => {
  const t = useTranslate();

  return (
    <div>
      <h2>About.</h2>
      <div>
        <p>{t("app.about.description")}</p>
        <div class="large">Based in Colombia</div>
        <p>
          I'm a passionate developer constantly learning to refine my skills and
          share knowledge with others.
        </p>
      </div>
    </div>
  );
});
