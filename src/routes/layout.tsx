import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import { Header } from "~/components/header/header";
import Footer from "~/components/footer/footer";

import styles from "./styles.css?inline";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().getFullYear()
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <main class="container">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
