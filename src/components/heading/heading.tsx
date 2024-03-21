import { Slot, component$ } from "@builder.io/qwik";

export interface HeadingProps {
  id?: string;
}

export default component$((props: HeadingProps) => {
  return (
    <>
      <h2
        id={props.id}
        class="scroll-mt-20 font-body text-2xl lg:scroll-mt-36 lg:text-3xl"
      >
        <a
          href={"#" + (props.id ?? "")}
          class="decoration-light-bg underline-offset-2 focus-within:underline hover:underline"
        >
          <Slot />
        </a>
      </h2>
    </>
  );
});
