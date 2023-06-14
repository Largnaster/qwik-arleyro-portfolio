import { component$ } from "@builder.io/qwik";
import EmployeesImage from "~/images/employees.webp";
import { Button } from "../common/Button";

export default component$(() => {
  return (
    <div class="text-center">
      <h1>
        So <span class="highlight">fantastic</span>
        <br />
        to have <span class="highlight">you</span> here
      </h1>
      <p>Have fun building your App with Qwik.</p>
      <div class="centered">
        <img
          src={EmployeesImage}
          alt="Qwik Logo"
          width="1000vw"
          height="auto"
        />
      </div>
      <div>
        <Button
          onClick$={async () => {
            console.log("button click");
          }}
        >
          Time to celebrate
        </Button>
        Explore the docs
      </div>
    </div>
  );
});
