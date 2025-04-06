import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <h1 class="font-body mt-6 text-center text-3xl lg:text-4xl">
        <Slot />
      </h1>
    </>
  );
});
