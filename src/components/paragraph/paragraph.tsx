import { ClassList, Slot, component$ } from "@builder.io/qwik";

export type ParagraphProps = {
  align?: "left" | "center" | "justify";
  size?: "small" | "medium" | "large";
  responsive?: boolean;
  class?: ClassList;
};

export default component$((props: ParagraphProps) => {
  const sizeClass =
    props.responsive === false
      ? props.size === "small"
        ? "text-sm"
        : props.size === "large"
          ? "text-large"
          : "text-base"
      : props.size === "small"
        ? "text-sm lg:text-base"
        : props.size === "large"
          ? "text-large lg:text-xl"
          : "text-base lg:text-lg";

  const textAlignClass =
    props.align === "left"
      ? "text-left"
      : props.align === "center"
        ? "text-center"
        : "text-justify";

  return (
    <>
      <p
        class={[
          "font-body whitespace-pre-line transition-[font]",
          sizeClass,
          textAlignClass,
          props.class,
        ]}
      >
        <Slot />
      </p>
    </>
  );
});
