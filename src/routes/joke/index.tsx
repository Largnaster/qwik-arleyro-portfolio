import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import {
  routeLoader$,
  routeAction$,
  Form,
  server$,
} from "@builder.io/qwik-city";

export const useJokeVoteAction = routeAction$((props) => {
  console.log("vote: ", props);
});

export const useDadJoke = routeLoader$(async () => {
  const reponse = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  return (await reponse.json()) as { id: string; joke: string; status: number };
});

export default component$(() => {
  const dadJokeSignal = useDadJoke();
  const favoriteJoke = useJokeVoteAction();

  const isFavouriteSignal = useSignal(false);

  useTask$(({ track }) => {
    track(() => isFavouriteSignal.value);
    console.log("Favourite changed (isomorphic): ", isFavouriteSignal.value);
    server$(() => {
      console.log("Favourite changed (server): ", isFavouriteSignal.value);
    })();
  });

  return (
    <section class="section bright">
      <p>{dadJokeSignal.value.joke}</p>
      <Form action={favoriteJoke}>
        <input type="hidden" name="jokeId" value={dadJokeSignal.value.id} />
        <button name="vote" value="up">
          👍
        </button>
        <button name="vote" value="down">
          👎
        </button>
        <button
          onClick$={() => {
            isFavouriteSignal.value = !isFavouriteSignal.value;
          }}
        >
          {isFavouriteSignal.value ? "♥" : "♡"}
        </button>
      </Form>
    </section>
  );
});
