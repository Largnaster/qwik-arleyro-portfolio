import { Fragment, component$, useStore } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import Card from "../common/Card/Card";
import { LuExternalLink } from "@qwikest/icons/lucide";

interface Technology {
  technologyName: string;
  iconPath: string;
}
interface ProjectInfo {
  name: string;
  startDate?: string;
  endDate?: string;
  description: string;
  technologies?: Technology[];
  url?: string;
}

interface TechnologiesChipProps
  extends Required<Pick<ProjectInfo, "technologies">> {}

const TechnologiesChipGroup = component$<TechnologiesChipProps>(
  ({ technologies }) => {
    if (technologies.length === 0) {
      return null;
    }

    return (
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
  },
  mongodb: {
    technologyName: "MongoDB",
    iconPath: "/images/mongodb-icon.svg"
  }
};
export default component$(() => {
  const t = useTranslate();

  const projectsList = useStore<ProjectInfo[]>([
    {
      name: "Discord Bot",
      description: t("app.work.projectsList.discordBot"),
      technologies: [
        technologiesHashMap["discordjs"],
        technologiesHashMap["mongodb"],
        technologiesHashMap["nodejs"],
        technologiesHashMap["typescript"]
      ]
    },
    {
      name: "Constellations",
      description: t("app.work.projectsList.constellations"),
      url: "https://constellations-vr.vercel.app/"
    }
  ]);

  const worksList = useStore<ProjectInfo[]>([
    {
      name: "I-comm Solutions SAS",
      startDate: t("app.work.worksList.iCommStartDate"),
      description: t("app.work.worksList.iComm"),
      technologies: [
        technologiesHashMap["react"],
        technologiesHashMap["django"],
        technologiesHashMap["typescript"],
        technologiesHashMap["postgresql"],
        technologiesHashMap["vite"]
      ],
      url: "https://i-comm.co/"
    }
  ]);

  return (
    <div id="work">
      <h2>{t("app.work.title")}</h2>
      <div>
        <p>{t("app.work.myWork")}</p>
        <div class="card-container">
          {worksList.map((work) => (
            <Card
              key={`work_card_${work.name}`}
              subtitle={
                work.startDate &&
                `${work.startDate} - ${work.endDate ?? t("app.common.present")}`
              }
              description={work.description}
            >
              <div q:slot="card-title" class="flex flex-row items-center gap-1">
                <h3>
                  <a href={work.url} target="_blank" rel="noreferrer">
                    {work.name}
                  </a>
                </h3>
                <LuExternalLink class="h-[1.3rem] w-[1.3rem]" />
              </div>
              <div q:slot="card-footer">
                {work.technologies && (
                  <Fragment>
                    <hr />
                    <TechnologiesChipGroup technologies={work.technologies} />
                  </Fragment>
                )}
              </div>
            </Card>
          ))}
        </div>
        <p>{t("app.work.experience")}</p>
      </div>
      <div>
        <h3>{t("app.work.projects")}</h3>
        <div class="card-container">
          {projectsList.map((project) => (
            <Card
              key={`project_card_${project.name}`}
              description={project.description}
            >
              <div q:slot="card-title" class="flex flex-row items-center gap-1">
                <h3>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                {project.url && (
                  <LuExternalLink class="h-[1.3rem] w-[1.3rem]" />
                )}
              </div>
              <div q:slot="card-footer">
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
