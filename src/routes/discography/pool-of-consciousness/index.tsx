import { component$ } from "@builder.io/qwik";
import type { RequestEvent } from "@builder.io/qwik-city";

export const onGet = async ({ redirect }: RequestEvent) => {
  throw redirect(307, "https://open.spotify.com/album/5RPNlQuVJZEZHsjwNnHELt");
};

export default component$(() => {
  return <></>;
});
