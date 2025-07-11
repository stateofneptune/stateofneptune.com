import { component$ } from "@builder.io/qwik";

export default component$(({ src }: { src: string }) => {
  return (
    <>
      <iframe
        class="aspect-video basis-[36rem]"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullscreen
      ></iframe>
    </>
  );
});
