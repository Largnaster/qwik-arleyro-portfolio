import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";
import { useServerTimeLoader } from "~/routes/layout";

export default component$(() => {
  const serverTime = useServerTimeLoader();
  const t = inlineTranslate();

  return (
    <footer>
      <div class="links">
        <div>
          <div class="large">{t("app.footer.resources")}</div>
          <ul class="list">
            <li>
              <Link
                target="_blank"
                href="https://github.com/Largnaster/qwik-arleyro-portfolio"
              >
                This project
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div class="large">{t("app.footer.externalLinks")}</div>
          <ul class="list">
            <li>
              <Link target="_blank" href="https://qwik.builder.io/">
                Qwik
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://daisyui.com/">
                DaisyUI
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://m2.material.io/">
                Material
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://tailwindcss.com/">
                Tailwind
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div class="large">{t("app.footer.contact")}</div>
          <ul class="list">
            <li>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/arleyro91/"
              >
                Linkedin
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://github.com/Largnaster">
                GitHub
              </Link>
            </li>
            <li>
              <Link target="_blank" href="mailto:arleyro91@gmail.com">
                Mail
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <a
          href="https://github.com/Largnaster/"
          target="_blank"
          class="anchor inline-block"
        >
          <span>Largnaster</span>
          <span class="spacer">|</span>
          <span>{serverTime.value.date}</span>
        </a>
      </div>
    </footer>
  );
});
