import { Slot, component$ } from "@builder.io/qwik";

export interface H3Props {
  key?: number;
  id?: string;
}

export default component$((props: H3Props) => {
  return (
    <>
      <h3 id={props.id} class="font-body scroll-mt-20 text-xl lg:scroll-mt-36">
        <a
          href={"#" + (props.id ?? "")}
          class="decoration-light-bg underline-offset-2 focus-within:underline hover:underline"
        >
          <Slot />
        </a>
      </h3>
    </>
  );
});
