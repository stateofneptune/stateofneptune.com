import { Slot, component$ } from "@builder.io/qwik";

export interface HeadingProps {
  id?: string;
}

export default component$((props: HeadingProps) => {
  return (
    <>
      <h2 id={props.id} class="font-body text-3xl">
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
