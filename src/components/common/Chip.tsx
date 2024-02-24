import { component$ } from "@builder.io/qwik";

interface ChipProps {
  text: string;
  imageSrc?: string;
  key?: number | string;
}

export default component$<ChipProps>(({ text, imageSrc, key }) => {
  return (
    <label
      key={key}
      class={`not-prose dui-swap dui-swap-flip ${imageSrc && "hover:dui-swap-active"}`}
    >
      {imageSrc && (
        <div class="dui-swap-off">
          <div class="dui-avatar [&_img]:object-fill">
            <div class="bg-base-200 dark:bg-neutral shadow-lg rounded-full w-20 p-3">
              <img src={imageSrc} alt={text} width={1} height={1} />
            </div>
          </div>
        </div>
      )}
      <div class={imageSrc ? "dui-swap-on" : "dui-swap-off"}>
        <div class="dui-avatar dui-placeholder">
          <div class="bg-base-200 dark:bg-neutral shadow-lg rounded-full w-20">
            <span>{text}</span>
          </div>
        </div>
      </div>
    </label>
  );
});
