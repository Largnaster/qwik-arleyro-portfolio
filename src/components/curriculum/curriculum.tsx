import { Fragment, component$ } from "@builder.io/qwik";
import Introduction from "./introduction";
import Work from "./work";
import About from "./about";
import Contact from "./contact";

export default component$(() => {
  return (
    <Fragment>
      <Introduction />
      <Work />
      <About />
      <Contact />
    </Fragment>
  );
});
