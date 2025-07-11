import type { ClassList } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

export interface ReleaseProps {
  id?: string;
  heading: string;
  class?: ClassList;
  href: string;
  src: string;
  alt?: string;
}

export default component$((props: ReleaseProps) => {
  return (
    <>
      <article
        id={props.id}
        class="flex min-h-[80lvh] flex-wrap content-center items-center justify-center gap-y-12"
      >
        <figure class="min-w-[14rem] basis-96">
          <a href={props.href} target="_blank">
            <img
              src={props.src}
              alt={props.alt}
              class="shadow-lg transition-[box-shadow] focus-within:shadow-2xl hover:shadow-2xl"
              width={384}
              height={384}
            ></img>
          </a>
        </figure>

        <div class="flex basis-96 flex-col items-center justify-center gap-y-2 transition-[gap] md:gap-y-4">
          <div class="font-subtitle text-accent text-center text-lg uppercase transition-[font-size] md:text-xl">
            {props.heading}
          </div>

          <div class="font-subtitle focus-within:text-accent hover:text-accent text-center uppercase transition-[color]">
            <a href={props.href} target="_blank">
              Buy
            </a>
          </div>
        </div>
      </article>
    </>
  );
});
