import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import EmployeesImage from "~/images/employees.webp";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <h1>
        So <span class="highlight">fantastic</span>
        <br />
        to have <span class="highlight">you</span> here
      </h1>
      <p>Have fun building your App with Qwik.</p>
      <img src={EmployeesImage} alt="Qwik Logo" width="1000vw" height="auto" />
      <div class={styles["button-group"]}>
        <button
          onClick$={async () => {
            console.log("button click");
          }}
        >
          Time to celebrate
        </button>
        Explore the docs
      </div>
    </div>
  );
});
