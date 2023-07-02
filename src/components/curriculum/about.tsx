import { component$, useStore } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import Chip from "../common/Chip";

export default component$(() => {
  const t = useTranslate();

  const ideasList = useStore([
    "English",
    "Spanish",
    "Self-taught",
    "Teamwork",
    "Stress management",
    "Programming",
    "Gaming",
    "Music",
    "Cooking",
    "Anime"
  ]);

  return (
    <div>
      <h2>{t("app.about.title")}</h2>
      <div>
        <div class="large">{t("app.about.location")}</div>
        <p>{t("app.about.myDescription")}</p>
      </div>
      <div>
        <p class="lead pb-4">{t("app.about.ideas")}</p>
        <div class="button-group">
          {ideasList.map((idea) => (
            <Chip key={`idea_chip_${idea}`} text={idea} />
          ))}
        </div>
      </div>
    </div>
  );
});
