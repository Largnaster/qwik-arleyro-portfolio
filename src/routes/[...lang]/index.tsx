import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useSpeak } from "qwik-speak";

import Hero from "~/components/curriculum/curriculum";

export default component$(() => {
  useSpeak({ runtimeAssets: ["app"] });
  return <Hero />;
});

export const head: DocumentHead = {
  title: "Arleyro | Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Web development portfolio of Bryann Torres. Check out my web development projects that highlight my skills and experience. Also find my updated CV for a detailed view of my professional journey."
    },
    {
      name: "author",
      content: "Bryann Torres"
    },
    {
      name: "theme-color",
      content: "#000000"
    },
    {
      name: "background-color",
      content: "#ffffff"
    },
    {
      property: "og:title",
      content: "Arleyro | Portfolio"
    },
    {
      property: "og:description",
      content:
        "Web development portfolio of Bryann Torres. Check out my web development projects that highlight my skills and experience. Also find my updated CV for a detailed view of my professional journey."
    },
    {
      property: "og:image",
      content: "https://arleyro.com/logo256.png"
    },
    {
      property: "og:url",
      content: "https://arleyro.com"
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:site_name",
      content: "Arleyro"
    }
  ],
  links: [
    {
      rel: "icon",
      href: "/favicon/favicon.svg",
      sizes: "any",
      type: "image/svg+xml"
    },
    {
      rel: "icon",
      href: "/favicon/favicon-32x32.ico",
      sizes: "32x32",
      type: "image/x-icon"
    },
    {
      rel: "icon",
      href: "/favicon/favicon-64x64.ico",
      sizes: "64x64",
      type: "image/x-icon"
    },
    {
      rel: "icon",
      href: "/favicon/favicon-256x256.ico",
      sizes: "256x256",
      type: "image/x-icon"
    }
  ]
};
