import { Fragment, JSXNode, component$, useStore } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import Card from "../common/Card/Card";
import Chip from "../common/Chip";

interface ProjectInfo {
  name: string;
  description: string;
  technologies?: JSXNode;
}

interface TechnologiesChipProps {
  technologies: string[];
}
const TechnologiesChip = component$<TechnologiesChipProps>(
  ({ technologies }) => {
    return (
      <Fragment>
        {technologies.map((technology) => (
          <Chip key={`technologies_chip_${technology}`} text={technology} />
        ))}
      </Fragment>
    );
  }
);

export default component$(() => {
  const t = useTranslate();

  const projectsList = useStore<ProjectInfo[]>([
    {
      name: "Factcil",
      description: t("app.work.projectsList.factcil"),
      technologies: (
        <TechnologiesChip technologies={["React", "TypeScript", "Firebase"]} />
      )
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
        <p>{t("app.work.myWork")}</p>
        <p>{t("app.work.experience")}</p>
      </div>
      <div>
        <h3>{t("app.work.projects")}</h3>
        <div class="card-container">
          {projectsList.map((project) => (
            <Card
              key={`project_card_${project.name}`}
              title={project.name}
              description={project.description}
              footerItems={
                project.technologies
                  ? [{ name: project.name, component: project.technologies }]
                  : []
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
});
