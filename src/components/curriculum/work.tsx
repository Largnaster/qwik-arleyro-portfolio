import { Fragment, component$, useStore } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import Card from "../common/Card/Card";

interface Technology {
  technologyName: string;
  iconPath: string;
}
interface ProjectInfo {
  name: string;
  description: string;
  technologies?: Technology[];
}

interface TechnologiesChipProps
  extends Required<Pick<ProjectInfo, "technologies">> {}

const TechnologiesChipGroup = component$<TechnologiesChipProps>(
  ({ technologies }) => {
    if (technologies.length === 0) {
      return null;
    }

    return (
      <div class="button-group">
        {technologies.map((technology) => (
          <div
            key={`technology_title_${technology.technologyName}`}
            class="tech-card"
          >
            <img
              class="technology-icon"
              src={technology.iconPath}
              alt={technology.technologyName}
              width={""}
              height={""}
            />
            <p class="muted">{technology.technologyName}</p>
          </div>
        ))}
      </div>
    );
  }
);

type TechnologiesHashMapType = {
  [key: string]: Technology;
};

const technologiesHashMap: TechnologiesHashMapType = {
  react: {
    technologyName: "React",
    iconPath: "/images/react-icon.svg"
  },
  typescript: {
    technologyName: "TypeScript",
    iconPath: "/images/typescript-icon.svg"
  },
  discordjs: {
    technologyName: "Discord.js",
    iconPath: "/images/discordjs-logo.png"
  },
  django: {
    technologyName: "Django",
    iconPath: "/images/django-icon.svg"
  },
  nodejs: {
    technologyName: "Node.js",
    iconPath: "/images/nodejs-icon.svg"
  },
  postgresql: {
    technologyName: "PostgreSQL",
    iconPath: "/images/postgresql-icon.svg"
  },
  vite: {
    technologyName: "Vite",
    iconPath: "/images/vite-icon.svg"
  }
};
export default component$(() => {
  const t = useTranslate();

  const projectsList = useStore<ProjectInfo[]>([
    {
      name: "Factcil",
      description: t("app.work.projectsList.factcil"),
      technologies: [
        technologiesHashMap["react"],
        technologiesHashMap["django"],
        technologiesHashMap["typescript"],
        technologiesHashMap["postgresql"]
      ]
    },
    {
      name: "Discord Bot",
      description: t("app.work.projectsList.discordBot"),
      technologies: [
        technologiesHashMap["discordjs"],
        technologiesHashMap["nodejs"],
        technologiesHashMap["typescript"]
      ]
    },
    {
      name: "Asodatos",
      description: t("app.work.projectsList.asodatos"),
      technologies: [
        technologiesHashMap["react"],
        technologiesHashMap["django"],
        technologiesHashMap["postgresql"],
        technologiesHashMap["vite"],
        technologiesHashMap["typescript"]
      ]
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
