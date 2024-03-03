import { component$, useStore } from "@builder.io/qwik";
import { inlineTranslate } from "qwik-speak";
import { LuLinkedin, LuMail, LuGithub } from "@qwikest/icons/lucide";
import { Link } from "@builder.io/qwik-city";
import Chip from "../common/Chip";

export default component$(() => {
  const t = inlineTranslate();

  const technologiesList = useStore([
    { label: "React", image: "/images/react-icon.svg" },
    { label: "Django", image: "/images/django-icon.svg" },
    { label: "Node.js", image: "/images/nodejs-icon.svg" },
    { label: "Postgres", image: "/images/postgresql-icon.svg" },
    { label: "Python", image: "/images/python-icon.svg" },
    { label: "TypeScript", image: "/images/typescript-icon.svg" }
  ]);
  const toolsList = useStore([
    { label: "Git", image: "/images/git-icon.svg" },
    { label: "GitHub", image: "/images/github-icon.svg" },
    { label: "VSCode", image: "/images/vscode-icon.svg" },
    { label: "Docker", image: "/images/docker-icon.svg" }
  ]);
  return (
    <div class="text-center">
      <div>
        <div class="typo mx-auto">
          <h1>{t("app.introduction.title")}</h1>
          <h2>{t("app.introduction.subtitle")}</h2>
        </div>
        <div class="flex flex-row justify-center space-x-4 mx-auto my-3 w-full">
          <div class="dui-tooltip dui-tooltip-bottom" data-tip="LinkedIn">
            <Link
              href="https://www.linkedin.com/in/arleyro91/"
              target="_blank"
              aria-label="LinkedIn icon"
            >
              <LuLinkedin class="h-6 w-6" />
            </Link>
          </div>
          <div class="dui-tooltip dui-tooltip-bottom" data-tip="e-mail">
            <Link
              href="mailto:arleyro91@gmail.com"
              target="_blank"
              aria-label="Mail icon"
            >
              <LuMail class="h-6 w-6" />
            </Link>
          </div>
          <div class="dui-tooltip dui-tooltip-bottom" data-tip="GitHub">
            <Link
              href="https://github.com/Largnaster"
              target="_blank"
              aria-label="GitHub icon"
            >
              <LuGithub class="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div class="typo-block">
        <p>{t("app.introduction.aboutMe")}</p>
        <ul>
          <li>
            <p>
              <strong>{t("app.introduction.frameworks")}</strong>
            </p>
            <div class="flex flex-wrap flex-row space-x-3">
              {technologiesList.map((technology) => (
                <Chip
                  key={`technology_chip_${technology.label}`}
                  text={technology.label}
                  imageSrc={technology.image}
                />
              ))}
            </div>
          </li>
          <li>
            <p>
              <strong>{t("app.introduction.tools")}</strong>
            </p>
            <div class="flex flex-wrap flex-row space-x-3">
              {toolsList.map((tool) => (
                <Chip
                  key={`technology_chip_${tool.label}`}
                  text={tool.label}
                  imageSrc={tool.image}
                />
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
});
