import { component$, useStore } from "@builder.io/qwik";
import { inlineTranslate } from "qwik-speak";

export default component$(() => {
  const t = inlineTranslate();

  const skillsList = useStore([
    t("app.about.skills.english"),
    t("app.about.skills.spanish"),
    t("app.about.skills.selfTaught"),
    t("app.about.skills.teamwork"),
    t("app.about.skills.stressManagement"),
    t("app.about.skills.programming"),
    t("app.about.skills.gaming"),
    t("app.about.skills.music"),
    t("app.about.skills.cooking"),
    t("app.about.skills.anime")
  ]);

  return (
    <div class="typo-block" id="about">
      <h2>{t("app.about.title")}</h2>
      <p>{t("app.about.location")}</p>
      <p>{t("app.about.firstDescription")}</p>
      <p>{t("app.about.secondDescription")}</p>
      <div class="flex flex-wrap flex-row items-center justify-start space-x-2 mt-3">
        {skillsList.map((skill) => (
          <div
            key={`skill_badge_${skill}`}
            class="dui-badge dui-badge-lg dui-badge-primary"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
});
