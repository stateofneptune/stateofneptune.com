import { component$ } from "@builder.io/qwik";
import type { RequestEvent } from "@builder.io/qwik-city";

export const onGet = async ({ redirect }: RequestEvent) => {
  throw redirect(
    307,
    "https://stateofneptune.bandcamp.com/track/now-i-remember-my-face-again",
  );
};

export default component$(() => {
  return <></>;
});
