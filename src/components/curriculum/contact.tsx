import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";

export default component$(() => {
  const t = inlineTranslate();

  return (
    <div id="contact" class="typo-block">
      <h2>{t("app.contact.title")}</h2>
      <p>{t("app.contact.description")}</p>
      <ul>
        <li>
          <Link
            class="dui-link dui-link-hover dui-link-primary"
            href="mailto:arleyro91@gmail.com"
            target="_blank"
            aria-label="My e-mail address"
          >
            arleyro91@gmail.com
          </Link>
        </li>
        <li>
          <Link
            class="dui-link dui-link-hover dui-link-primary"
            href="https://www.linkedin.com/in/arleyro91/"
            target="_blank"
            aria-label="My LinkedIn profile"
          >
            LinkedIn
          </Link>
        </li>
      </ul>
    </div>
  );
});
