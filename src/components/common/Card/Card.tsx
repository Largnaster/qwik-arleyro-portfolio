import { component$, Slot } from "@builder.io/qwik";

interface CardProps {
  title: string;
  subtitle?: string;
  description: string;
  key?: number | string;
}

export default component$<CardProps>(
  ({ title, subtitle, description, key }) => {
    return (
      <div key={key} class="card">
        <h3>{title}</h3>
        {subtitle && <p class="muted">{subtitle}</p>}
        <div>{description}</div>
        <Slot name="card-footer" />
      </div>
    );
  }
);
