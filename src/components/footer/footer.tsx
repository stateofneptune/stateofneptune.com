import { component$ } from "@builder.io/qwik";

import FooterNavItem from "../footer-nav-item/footer-nav-item";
import UnderlineLink from "../underline-link/underline-link";

export default component$(() => {
  return (
    <>
      <footer class="mt-auto overflow-x-hidden bg-deep-bg py-4 font-body">
        <nav>
          <ul class="flex items-center justify-center">
            <li>
              <FooterNavItem
                href="https://www.instagram.com/stateofneptune/"
                aria-label="State Of Neptune Instagram link."
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://www.facebook.com/stateofneptune/"
                aria-label="State Of Neptune Facebook link."
                target="_blank"
              >
                <i class="fab fa-facebook"></i>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://www.tiktok.com/@stateofneptune"
                aria-label="State Of Neptune TikTok account link."
                target="_blank"
              >
                <i class="fab fa-tiktok"></i>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://twitter.com/stateofneptune"
                aria-label="State Of Neptune Twitter account link."
                showAbove="md"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://www.youtube.com/@stateofneptune1864"
                aria-label="State Of Neptune YouTube account link."
                target="_blank"
              >
                <i class="fab fa-youtube"></i>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://open.spotify.com/artist/5FhQX1j6F5axsMOc1UiDmW"
                aria-label="State Of Neptune Spotify artist link."
                target="_blank"
              >
                <i class="fab fa-spotify"></i>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://stateofneptune.bandcamp.com/"
                aria-label="State Of Neptune Bandcamp artist link."
                target="_blank"
              >
                <i class="fab fa-bandcamp"></i>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://music.apple.com/pl/artist/state-of-neptune/1570636107"
                aria-label="State Of Neptune Apple Music artist link."
                showAbove="lg"
                target="_blank"
              >
                <i class="fab fa-itunes-note"></i>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://music.amazon.com/artists/B09RCQG8XZ/state-of-neptune"
                aria-label="State Of Neptune Amazon Music artist link."
                showAbove="lg"
                target="_blank"
              >
                <i class="fab fa-amazon"></i>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://www.deezer.com/us/artist/158840862"
                aria-label="State Of Neptune Deezer artist link."
                showAbove="lg"
                target="_blank"
              >
                <i class="fab fa-deezer"></i>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="mailto:stateofneptune@gmail.com"
                aria-label="Mail to State Of Neptune."
              >
                <i class="fas fa-envelope"></i>
              </FooterNavItem>
            </li>
          </ul>
        </nav>

        <div class="flex items-center justify-center text-center text-sm text-dim transition-[font-size] md:text-base">
          <p>© 2023 State Of Neptune – All Rights Reserved</p>
        </div>

        <div class="flex items-center justify-center text-center">
          <UnderlineLink
            class="text-sm transition-[font-size] md:text-base"
            href="/privacy-policy/"
          >
            Privacy policy
          </UnderlineLink>
        </div>
      </footer>
    </>
  );
});
