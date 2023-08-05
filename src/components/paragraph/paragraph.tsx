import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <p class="font-body text-lg">
        <Slot />
      </p>
    </>
  );
});
