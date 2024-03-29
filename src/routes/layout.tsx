import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import { Header } from "~/components/header/header";
import Footer from "~/components/footer/footer";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().getFullYear()
  };
});

export default component$(() => {
  return (
    <main>
      <Header />
      <div class="container mx-auto px-4">
        <Slot />
      </div>
      <Footer />
    </main>
  );
});
