import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container">
        <a
          href="https://qwik.builder.io/"
          target="_blank"
          class={styles.anchor}
        >
          <span>Made with Qwik</span>
        </a>
        <a
          href="https://github.com/Largnaster/"
          target="_blank"
          class={styles.anchor}
        >
          <span>By Largnaster</span>
          <span class={styles.spacer}>|</span>
          <span>{serverTime.value.date}</span>
        </a>
      </div>
    </footer>
  );
});
