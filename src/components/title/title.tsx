import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <h1 class="mb-6 text-center font-body text-4xl">
        <Slot />
      </h1>
    </>
  );
});
