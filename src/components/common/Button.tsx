import { type HTMLAttributes, component$, Slot } from "@builder.io/qwik";

interface ButtonProps<T> extends HTMLAttributes<T> {
  onClick$?: () => void;
  autofocus?: boolean;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  name?: string;
  type?: "submit" | "reset" | "button";
  value?: string | string[] | number;
  variant?: "primary" | "outlined" | "secondary" | "error" | "text" | "link";
  size?: "sm" | "md" | "lg";
  class?: string | Record<string, boolean>;
}

export const Button = component$<ButtonProps<HTMLButtonElement>>((props) => {
  const {
    class: className,
    variant = "primary",
    size = "md",
    ...otherProps
  } = props;

  let classList = `${variant} ${size} `;

  if (typeof className === "string") {
    classList += className;
  } else if (typeof className === "object") {
    for (const [key, value] of Object.entries(className)) {
      if (value) {
        classList += `${key} `;
      }
    }
  }

  return (
    <button class={classList.trim()} {...otherProps}>
      <Slot />
    </button>
  );
});
