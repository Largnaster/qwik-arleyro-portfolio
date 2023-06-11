import {
  type Signal,
  Slot,
  component$,
  createContextId,
  useContextProvider,
  useSignal
} from "@builder.io/qwik";

export interface Theme {
  color: string;
  backgroundColor: string;
}

export const ThemeContext = createContextId<Signal<Theme>>("theme");

export default component$(() => {
  const defaultTheme: Theme = {
    color: "black",
    backgroundColor: "white"
  };

  const theme = useSignal(defaultTheme);

  useContextProvider(ThemeContext, theme);

  return (
    <>
      <Slot />
    </>
  );
});
