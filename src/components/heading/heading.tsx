import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <h2 class="font-body text-3xl">
        <Slot />
      </h2>
    </>
  );
});
