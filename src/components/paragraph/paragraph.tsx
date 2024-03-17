import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <p class="text-justify font-body text-lg">
        <Slot />
      </p>
    </>
  );
});
