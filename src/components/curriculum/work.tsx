import {
  component$,
  useSignal,
  useStore,
  $,
  useOnWindow
} from "@builder.io/qwik";
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
  imagesSet?: string[];
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
  const isAlbumModalOpen = useSignal<boolean>(false);
  const modalImagesSet = useSignal<string[]>([]);
  const btnLabelText = useSignal<string>(t("app.work.showAlbum"));

  const handleOpenAlbumModal$ = $((imagesSet: string[]) => {
    isAlbumModalOpen.value = true;
    modalImagesSet.value = imagesSet;
  });

  const handleCloseAlbumModal$ = $((e: PointerEvent) => {
    e.preventDefault();
    isAlbumModalOpen.value = false;
  });

  const projectsList = useStore<ProjectInfo[]>([
    {
      name: "Pick/Inappsis Fintech",
      description: t("app.work.projectsList.pick"),
      technologies: ["React", "Django", "TypeScript", "PostgreSQL", "Vite"],
      imagesSet: [
        "/images/projects/pick-dashboard.webp",
        "/images/projects/pick-simulator.webp",
        "/images/projects/pick-form.webp",
        "/images/projects/pick-list.webp",
        "/images/projects/pick-details.webp"
      ]
    },
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
      previewImage: "/images/toolit-dashboard.webp"
    }
  ]);

  useOnWindow(
    "keydown",
    $((e: KeyboardEvent) => {
      if (e.key === "Escape" && isAlbumModalOpen.value) {
        isAlbumModalOpen.value = false;
      }
    })
  );

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
            {project.imagesSet && project.imagesSet.length > 0 && (
              <div q:slot="card-actions">
                <button
                  onClick$={() =>
                    handleOpenAlbumModal$(project.imagesSet ?? [])
                  }
                  class="dui-btn dui-btn-info"
                >
                  {btnLabelText}
                </button>
              </div>
            )}
          </Card>
        ))}
      </div>
      <dialog class={`dui-modal ${isAlbumModalOpen.value && "dui-modal-open"}`}>
        <div class="dui-modal-box">
          {modalImagesSet.value.map((image, ind) => (
            <img
              key={`modal_image_${ind}`}
              src={image}
              alt={`Example page ${ind}`}
              width={100}
              height={100}
            />
          ))}
        </div>
        <div class="dui-modal-backdrop" onClick$={handleCloseAlbumModal$}></div>
      </dialog>
    </div>
  );
});
