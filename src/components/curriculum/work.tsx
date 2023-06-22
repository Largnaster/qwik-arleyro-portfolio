import { component$, useStore } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import Card from "../common/Card/Card";

export default component$(() => {
  const t = useTranslate();

  const projectsList = useStore([
    {
      name: "Factcil",
      description:
        "Building and maintaining a web application for a client, I have been able to learn and improve my skills in React, TypeScript, Django, Python and Postgres."
    },
    {
      name: "RikoBot (Discord)",
      description:
        "A project of a bot for Discord using DiscordJS and TypeScript, this project is in development and I am learning a lot about the Discord API and MongoDB."
    },
    {
      name: "Asodatos",
      description:
        "A fintech project where I'm currently working as a full stack developer, using React, TypeScript, Django, Python and Postgres."
    }
  ]);

  return (
    <div>
      <h2>{t("app.work.title")}</h2>
      <div>
        <p>
          With over a year of experience I'm adept at maintaining and developing
          features for web applications, all while ensuring to meet the specific
          requirements of my clients.
        </p>
        <p>
          As a full stack developer, my work primarily involves using React
          TypeScript and Django. I value teamwork, readily share knowledge with
          my colleagues, and consistently learn new things to enhance my skills.
        </p>
      </div>
      <div>
        <h3>{t("app.work.projects")}</h3>
        {projectsList.map((project) => (
          <Card
            key={`project_card_${project.name}`}
            title={project.name}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
});
