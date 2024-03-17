import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <h1 class="mt-6 text-center font-body text-4xl">
        <Slot />
      </h1>
    </>
  );
});
