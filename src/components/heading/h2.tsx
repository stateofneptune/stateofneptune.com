import { Slot, component$ } from "@builder.io/qwik";

export interface H2Props {
  id?: string;
}

export default component$((props: H2Props) => {
  return (
    <>
      <h2
        id={props.id}
        class="font-body scroll-mt-20 text-2xl lg:scroll-mt-36 lg:text-3xl"
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
