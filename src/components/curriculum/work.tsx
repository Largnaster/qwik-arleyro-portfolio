import { Fragment, component$, useStore } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import Card from "../common/Card/Card";

interface ProjectInfo {
  name: string;
  description: string;
  technologies?: {
    technologyName: string;
    iconPath: string;
  }[];
}

interface TechnologiesChipProps
  extends Required<Pick<ProjectInfo, "technologies">> {}

const TechnologiesChipGroup = component$<TechnologiesChipProps>(
  ({ technologies }) => {
    if (technologies.length === 0) {
      return null;
    }

    return (
      <div class="button-group space-x-1">
        {technologies.map((technology) => (
          <div
            key={`technology_title_${technology.technologyName}`}
            class="flex flex-col justify-center items-center"
          >
            <img
              class="technology-icon"
              src={technology.iconPath}
              alt={technology.technologyName}
              width={""}
              height={""}
            />
            <h6 class="m-1">{technology.technologyName}</h6>
          </div>
        ))}
      </div>
    );
  }
);

export default component$(() => {
  const t = useTranslate();

  const projectsList = useStore<ProjectInfo[]>([
    {
      name: "Factcil",
      description: t("app.work.projectsList.factcil"),
      technologies: [
        {
          technologyName: "React",
          iconPath: "/images/react-icon.svg"
        },
        {
          technologyName: "TypeScript",
          iconPath: "/images/typescript-icon.svg"
        }
      ]
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
            >
              <div q:slot="card-footer" class="card-footer">
                {project.technologies && (
                  <Fragment>
                    <hr />
                    <TechnologiesChipGroup
                      technologies={project.technologies}
                    />
                  </Fragment>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
});
