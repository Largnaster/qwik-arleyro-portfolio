import { component$ } from "@builder.io/qwik";

interface ChipProps {
  text: string;
  key?: number | string;
}

export default component$<ChipProps>(({ text, key }) => {
  return (
    <div key={key} class="chip">
      {text}
    </div>
  );
});
