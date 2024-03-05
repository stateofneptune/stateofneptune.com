import { Slot, component$ } from "@builder.io/qwik";

export interface HeadingProps {
  id?: string;
}

export default component$((props: HeadingProps) => {
  return (
    <>
      <h2 id={props.id} class="scroll-mt-20 font-body text-3xl lg:scroll-mt-36">
        <a href={"#" + (props.id ?? "")} class="group">
          <Slot />
          <span class="invisible text-dim group-focus-within:visible group-hover:visible">
            {" "}
            #
          </span>
        </a>
      </h2>
    </>
  );
});
