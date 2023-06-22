import { component$ } from "@builder.io/qwik";

interface CardProps {
  title: string;
  description: string;
  key?: number | string;
}

export default component$<CardProps>(({ title, description, key }) => {
  return (
    <div key={key} class="card">
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  );
});
