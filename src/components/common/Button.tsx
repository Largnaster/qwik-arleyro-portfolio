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
  variant?: "primary" | "outlined" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button = component$<ButtonProps<HTMLButtonElement>>((props) => {
  const {
    class: givenClass,
    variant = "primary",
    size = "md",
    ...otherProps
  } = props;

  const classList = `${variant} ${size} ${givenClass}`;

  return (
    <button class={classList.trim()} {...otherProps}>
      <Slot />
    </button>
  );
});
