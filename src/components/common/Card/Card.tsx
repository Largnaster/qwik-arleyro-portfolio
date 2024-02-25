import { component$, Slot } from "@builder.io/qwik";
import { LuExternalLink } from "@qwikest/icons/lucide";
import { inlineTranslate } from "qwik-speak";

interface CardProps {
  title: string;
  url?: string;
  subtitle?: string;
  description?: string;
  descriptionIsComponent?: boolean;
  previewImage?: string;
  key?: number | string;
}

export default component$<CardProps>((props) => {
  const t = inlineTranslate();
  const {
    title,
    subtitle,
    description,
    key,
    url,
    descriptionIsComponent,
    previewImage
  } = props;

  return (
    <div key={key} class="dui-card lg:dui-card-side bg-base-100 shadow-xl">
      {previewImage && (
        <figure class="max-h-80 [&_img]:w-full [&_img]:h-auto lg:max-xl:[&_img]:w-auto lg:max-xl:[&_img]:h-full">
          <img
            src={previewImage}
            alt={`Preview for ${key}`}
            width={100}
            height={100}
          />
        </figure>
      )}
      <div class="dui-card-body">
        <h2 class="dui-card-title">
          {url ? (
            <div class="flex flex-row items-center justify-start space-x-1">
              <a href={url} target="_blank" rel="noreferrer">
                {title}
              </a>
              <LuExternalLink class="h-[1.3rem] w-[1.3rem]" />
            </div>
          ) : (
            title
          )}
        </h2>
        {subtitle && <p class="text-neutral-content">{subtitle}</p>}
        {descriptionIsComponent ? (
          <Slot name="card-content" />
        ) : (
          <p>{description ?? t("app.common.noContentProvided")}</p>
        )}

        <div class="dui-card-actions justify-end">
          <Slot name="card-actions" />
        </div>
      </div>
    </div>
  );
});
