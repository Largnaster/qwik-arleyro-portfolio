import { component$, useStore } from "@builder.io/qwik";
import { inlineTranslate } from "qwik-speak";
import Chip from "../common/Chip";

export default component$(() => {
  const t = inlineTranslate();

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
    <div id="about">
      <h2>{t("app.about.title")}</h2>
      <div>
        <div class="large">{t("app.about.location")}</div>
      </div>
      <div>
        <div class="button-group">
          {ideasList.map((idea) => (
            <Chip key={`idea_chip_${idea}`} text={idea} />
          ))}
        </div>
      </div>
      <p>{t("app.about.firstDescription")}</p>
      <p>{t("app.about.secondDescription")}</p>
    </div>
  );
});
