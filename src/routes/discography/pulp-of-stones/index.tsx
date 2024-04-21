import { component$ } from "@builder.io/qwik";
import type { RequestEvent } from "@builder.io/qwik-city";

export const onGet = async ({ redirect }: RequestEvent) => {
  throw redirect(
    307,
    "https://stateofneptune.bandcamp.com/album/pulp-of-stones"
  );
};

export default component$(() => {
  return <></>;
});
