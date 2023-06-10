import { Slot, component$ } from "@builder.io/qwik";

export interface FooterNavItemProps {
  href: string;
  target?: "_blank" | undefined;
  showAbove?: "md" | "lg" | undefined;
}

export default component$(({ href, target, showAbove }: FooterNavItemProps) => {
  return (
    <>
      <div
        class={[
          "h-10 w-10 min-w-[2rem] items-center justify-center transition-all md:h-12 md:w-12",
          showAbove
            ? ["hidden", showAbove === "md" ? "md:flex" : "lg:flex"]
            : "flex",
        ]}
      >
        <a
          target={target}
          href={href}
          class="text-md transition-all focus-within:text-accent hover:text-accent md:text-lg"
        >
          <Slot></Slot>
        </a>
      </div>
    </>
  );
});
