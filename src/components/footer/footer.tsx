import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <footer class="mt-auto py-4 font-body overflow-x-hidden">
        <nav>
          <ul class="flex items-center justify-center">
            <li class="h-10 w-10 md:h-12 md:w-12 min-w-[2rem] flex justify-center items-center transition-all">
              <a
                class="text-md md:text-lg transition-all hover:text-accent"
                href="https://www.instagram.com/stateofneptune/"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>

            <li class="h-10 w-10 md:h-12 md:w-12 min-w-[2rem] flex justify-center items-center transition-all">
              <a
                class="text-md md:text-lg transition-all hover:text-accent"
                href="https://www.facebook.com/stateofneptune/"
                target="_blank"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>

            <li class="h-10 w-10 md:h-12 md:w-12 min-w-[2rem] flex justify-center items-center transition-all">
              <a
                class="text-md md:text-lg transition-all hover:text-accent"
                href="https://www.tiktok.com/@stateofneptune"
                target="_blank"
              >
                <i class="fab fa-tiktok"></i>
              </a>
            </li>

            <li class="h-10 w-10 md:h-12 md:w-12 min-w-[2rem] transition-all hidden md:flex md:justify-center md:items-center">
              <a
                class="text-md md:text-lg transition-all hover:text-accent"
                href="https://twitter.com/stateofneptune"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>

            <li class="h-10 w-10 md:h-12 md:w-12 min-w-[2rem] flex justify-center items-center transition-all">
              <a
                class="text-md md:text-lg transition-all hover:text-accent"
                href="https://www.youtube.com/@stateofneptune1864"
                target="_blank"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </li>

            <li class="h-10 w-10 md:h-12 md:w-12 min-w-[2rem] flex justify-center items-center transition-all">
              <a
                class="text-md md:text-lg transition-all hover:text-accent"
                href="https://open.spotify.com/artist/5FhQX1j6F5axsMOc1UiDmW"
                target="_blank"
              >
                <i class="fab fa-spotify"></i>
              </a>
            </li>

            <li class="h-10 w-10 md:h-12 md:w-12 min-w-[2rem] flex justify-center items-center transition-all">
              <a
                class="text-md md:text-lg transition-all hover:text-accent"
                href="https://stateofneptune.bandcamp.com/"
                target="_blank"
              >
                <i class="fab fa-bandcamp"></i>
              </a>
            </li>

            <li class="h-10 w-10 md:h-12 md:w-12 min-w-[2rem] transition-all hidden lg:flex lg:justify-center lg:items-center">
              <a
                class="text-md md:text-lg transition-all hover:text-accent"
                href="https://music.apple.com/pl/artist/state-of-neptune/1570636107"
                target="_blank"
              >
                <i class="fab fa-itunes-note"></i>
              </a>
            </li>

            <li class="h-10 w-10 md:h-12 md:w-12 min-w-[2rem] transition-all hidden lg:flex lg:justify-center lg:items-center">
              <a
                class="text-md md:text-lg transition-all hover:text-accent"
                href="https://music.amazon.com/artists/B09RCQG8XZ/state-of-neptune"
                target="_blank"
              >
                <i class="fab fa-amazon"></i>
              </a>
            </li>

            <li class="h-10 w-10 md:h-12 md:w-12 min-w-[2rem] transition-all hidden lg:flex lg:justify-center lg:items-center">
              <a
                class="text-md md:text-lg transition-all hover:text-accent"
                href="https://www.deezer.com/us/artist/158840862"
                target="_blank"
              >
                <i class="fab fa-deezer"></i>
              </a>
            </li>

            <li class="h-10 w-10 md:h-12 md:w-12 min-w-[2rem] flex justify-center items-center transition-all">
              <a
                class="text-md md:text-lg transition-all hover:text-accent"
                href="mailto:stateofneptune@gmail.com">
                <i class="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center justify-center text-center text-sm text-dim transition-[font-size] md:text-base">
          <p>© 2023 State Of Neptune – All Rights Reserved</p>
        </div>

        <div class="flex items-center justify-center text-center text-sm transition-[font-size] md:text-base">
          <Link
            class="decoration-accent underline-offset-2 hover:underline"
            href="/privacy-policy"
          >
            Privacy policy
          </Link>
        </div>
      </footer>
    </>
  );
});
