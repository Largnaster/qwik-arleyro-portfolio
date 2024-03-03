import { component$, Fragment } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";
import { useServerTimeLoader } from "~/routes/layout";

export default component$(() => {
  const serverTime = useServerTimeLoader();
  const t = inlineTranslate();

  return (
    <Fragment>
      <footer class="dui-footer p-10 xl:px-52 bg-base-200 text-base-content mt-12">
        <nav>
          <h6 class="dui-footer-title">{t("app.footer.resources")}</h6>
          <Link
            class="dui-link dui-link-hover"
            target="_blank"
            href="https://github.com/Largnaster/qwik-arleyro-portfolio"
          >
            This project
          </Link>
        </nav>
        <nav>
          <h6 class="dui-footer-title">{t("app.footer.externalLinks")}</h6>
          <Link
            class="dui-link dui-link-hover"
            target="_blank"
            href="https://qwik.builder.io/"
          >
            Qwik
          </Link>
          <Link
            class="dui-link dui-link-hover"
            target="_blank"
            href="https://daisyui.com/"
          >
            DaisyUI
          </Link>
          <Link
            class="dui-link dui-link-hover"
            target="_blank"
            href="https://tailwindcss.com/"
          >
            Tailwind
          </Link>
        </nav>
        <nav>
          <h6 class="dui-footer-title">{t("app.footer.contact")}</h6>
          <Link
            class="dui-link dui-link-hover"
            target="_blank"
            href="https://www.linkedin.com/in/arleyro91/"
          >
            Linkedin
          </Link>
          <Link
            class="dui-link dui-link-hover"
            target="_blank"
            href="https://github.com/Largnaster"
          >
            GitHub
          </Link>
          <Link
            class="dui-link dui-link-hover"
            target="_blank"
            href="mailto:arleyro91@gmail.com"
          >
            Mail
          </Link>
        </nav>
      </footer>
      {/* Copyright section */}
      <footer class="dui-footer dui-footer-center px-10 py-8 border-t bg-base-200 text-base-content border-base-300">
        <aside>
          <Link
            class="dui-link dui-link-hover"
            href="https://github.com/Largnaster/"
            target="_blank"
          >
            <span>Largnaster</span>
            <span class="m-2">|</span>
            <span>{serverTime.value.date}</span>
          </Link>
        </aside>
      </footer>
    </Fragment>
  );
});
