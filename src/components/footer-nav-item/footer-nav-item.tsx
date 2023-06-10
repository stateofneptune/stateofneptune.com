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
          class="text-md transition-all hover:text-accent md:text-lg"
          target={target}
          href={href}
        >
          <Slot></Slot>
        </a>
      </div>
    </>
  );
});
