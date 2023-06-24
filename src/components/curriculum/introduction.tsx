import { component$, useStore } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import { LuLinkedin, LuMail, LuGithub } from "@qwikest/icons/lucide";
import { Link } from "@builder.io/qwik-city";
import Chip from "../common/Chip";

export default component$(() => {
  const t = useTranslate();

  const technologiesList = useStore([
    {
      name: "React"
    },
    {
      name: "TypeScript"
    },
    {
      name: "Python"
    },
    {
      name: "Django"
    },
    {
      name: "Postgres"
    }
  ]);
  return (
    <div>
      <div class="text-center flex flex-col space-y-2 pb-4">
        <h1>{t("app.introduction.title")}</h1>
        <h3>{t("app.introduction.subtitle")}</h3>
        <div class="button-group justify-center items-center">
          <Link
            class="has-svg"
            href="https://www.linkedin.com/in/arleyro91/"
            target="_blank"
          >
            <LuLinkedin class="icon" />
          </Link>
          <Link
            class="has-svg"
            href="mailto:arleyro91@gmail.com"
            target="_blank"
          >
            <LuMail class="icon" />
          </Link>
          <Link
            class="has-svg"
            href="https://github.com/Largnaster"
            target="_blank"
          >
            <LuGithub class="icon" />
          </Link>
        </div>
      </div>
      <div>
        <p>{t("app.introduction.aboutMe")}</p>
        <div class="button-group">
          {technologiesList.map((technology) => (
            <Chip
              key={`technology_chip_${technology.name}`}
              text={technology.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
