import { component$, useStore } from "@builder.io/qwik";
import { inlineTranslate } from "qwik-speak";
import Card from "../common/Card/Card";

interface ProjectInfo {
  name: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  technologies?: string[];
  previewImage?: string;
  url?: string;
}

type TechnologiesChipProps = Required<Pick<ProjectInfo, "technologies">>;

const TechnologiesChipGroup = component$<TechnologiesChipProps>(
  ({ technologies }) => {
    if (technologies.length === 0) {
      return null;
    }

    return (
      <div class="flex flex-wrap flex-row items-center justify-start space-x-2 mt-3">
        {technologies.map((technology) => (
          <div
            key={`technology_title_${technology}`}
            class="dui-badge dui-badge-lg dui-badge-primary"
          >
            {technology}
          </div>
        ))}
      </div>
    );
  }
);

export default component$(() => {
  const t = inlineTranslate();

  const projectsList = useStore<ProjectInfo[]>([
    {
      name: "Discord Bot",
      description: t("app.work.projectsList.discordBot"),
      technologies: ["React", "Django", "TypeScript", "PostgreSQL", "Vite"]
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
      technologies: ["React", "Django", "TypeScript", "PostgreSQL", "Vite"],
      url: "https://i-comm.co/",
      previewImage: "/images/form.jpg"
    }
  ]);

  return (
    <div id="work">
      <div class="typo max-w-none text-left">
        <h2>{t("app.work.title")}</h2>
        <p>{t("app.work.myWork")}</p>
      </div>
      <div class="flex flex-col gap-5">
        {worksList.map((work) => (
          <Card
            key={`work_card_${work.name}`}
            title={work.name}
            url={work.url}
            previewImage={work.previewImage}
            subtitle={
              work.startDate &&
              `${work.startDate} - ${work.endDate ?? t("app.common.present")}`
            }
            descriptionIsComponent
          >
            <div q:slot="card-content">
              <p>{work.description}</p>
              {work.technologies && (
                <TechnologiesChipGroup technologies={work.technologies} />
              )}
            </div>
          </Card>
        ))}
      </div>
      <div class="typo max-w-none text-left">
        <h2>{t("app.work.projects")}</h2>
        <p>{t("app.work.experience")}</p>
      </div>
      <div class="flex flex-col gap-5">
        {projectsList.map((project) => (
          <Card
            key={`project_card_${project.name}`}
            title={project.name}
            url={project.url}
            descriptionIsComponent
          >
            <div q:slot="card-content">
              <p>{project.description}</p>
              {project.technologies && (
                <TechnologiesChipGroup technologies={project.technologies} />
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
});
