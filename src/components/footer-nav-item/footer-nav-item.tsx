import { Slot, component$ } from "@builder.io/qwik";

export interface FooterNavItemProps {
  href: string;
  target?: "_blank" | undefined;
  showAbove?: "md" | "lg" | undefined;
  "aria-label"?: string;
}

export default component$((props: FooterNavItemProps) => {
  return (
    <>
      <div
        class={[
          "h-10 w-10 min-w-[2rem] items-center justify-center transition-all md:h-12 md:w-12",
          props.showAbove
            ? ["hidden", props.showAbove === "md" ? "md:flex" : "lg:flex"]
            : "flex",
        ]}
      >
        <a
          class="text-md transition-all focus-within:text-accent hover:text-accent md:text-lg"
          target={props.target}
          href={props.href}
          aria-label={props["aria-label"]}
        >
          <Slot />
        </a>
      </div>
    </>
  );
});
