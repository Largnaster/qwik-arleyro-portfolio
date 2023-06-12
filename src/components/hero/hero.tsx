import { component$ } from "@builder.io/qwik";
import EmployeesImage from "~/images/employees.webp";

export default component$(() => {
  return (
    <div>
      <h1>
        So <span class="highlight">fantastic</span>
        <br />
        to have <span class="highlight">you</span> here
      </h1>
      <p>Have fun building your App with Qwik.</p>
      <img src={EmployeesImage} alt="Qwik Logo" width="1000vw" height="auto" />
      <div>
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
