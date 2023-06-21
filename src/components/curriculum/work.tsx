import { component$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";

export default component$(() => {
  const t = useTranslate();

  return (
    <div>
      <h2>Work.</h2>
      <div>
        <p>
          With over a year of experience I'm adept at maintaining and developing
          features for web applications, all while ensuring to meet the specific
          requirements of my clients.
        </p>
        <p>
          As a full stack developer, my work primarily involves using React
          TypeScript and Django. I value teamwork, readily share knowledge with
          my colleagues, and consistently learn new things to enhance my skills.
        </p>
      </div>
    </div>
  );
});
