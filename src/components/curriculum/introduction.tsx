import { component$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import { LuLinkedin, LuMail, LuGithub } from "@qwikest/icons/lucide";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const t = useTranslate();

  return (
    <div>
      <div class="text-center flex flex-col space-y-2">
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
        <p>
          Hello! I'm Bryann Torres, a dedicated Full Stack Developer with a
          year's experience in the tech industry. My expertise spans
          technologies such as React, Django, TypeScript, Python, Postgres, and
          JavaScript. In my current role, I've been successfully maintaining and
          upgrading web applications, addressing client needs, troubleshooting
          bugs, and sharing knowledge with my team.
        </p>
      </div>
    </div>
  );
});
