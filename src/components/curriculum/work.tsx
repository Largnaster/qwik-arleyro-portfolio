import { component$, useStore } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import Card from "../common/Card/Card";

export default component$(() => {
  const t = useTranslate();

  const projectsList = useStore([
    {
      name: "Factcil",
      description: t("app.work.projectsList.factcil")
    },
    {
      name: "Discord Bot",
      description: t("app.work.projectsList.discordBot")
    },
    {
      name: "Asodatos",
      description: t("app.work.projectsList.asodatos")
    }
  ]);

  return (
    <div>
      <h2>{t("app.work.title")}</h2>
      <div>
        <p>{t("app.work.experience")}</p>
        <p>{t("app.work.myWork")}</p>
      </div>
      <div>
        <h3>{t("app.work.projects")}</h3>
        <div class="card-container">
          {projectsList.map((project) => (
            <Card
              key={`project_card_${project.name}`}
              title={project.name}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
