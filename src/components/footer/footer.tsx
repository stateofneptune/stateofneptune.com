import { component$ } from "@builder.io/qwik";

import FooterNavItem from "../footer-nav-item/footer-nav-item";
import UnderlineLink from "../underline-link/underline-link";

import { FaIcon } from "qwik-fontawesome";

import {
  faAmazon,
  faBandcamp,
  faDeezer,
  faFacebook,
  faInstagram,
  faItunesNote,
  faSpotify,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default component$(() => {
  return (
    <>
      <footer class="bg-deep-bg font-body mt-auto overflow-x-hidden py-4">
        <nav>
          <ul class="flex items-center justify-center">
            <li>
              <FooterNavItem
                href="https://www.instagram.com/stateofneptune/"
                aria-label="State Of Neptune Instagram link."
                target="_blank"
              >
                <FaIcon icon={faInstagram}></FaIcon>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://www.facebook.com/stateofneptune/"
                aria-label="State Of Neptune Facebook link."
                target="_blank"
              >
                <FaIcon icon={faFacebook}></FaIcon>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://www.tiktok.com/@stateofneptune"
                aria-label="State Of Neptune TikTok account link."
                target="_blank"
              >
                <FaIcon icon={faTiktok}></FaIcon>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://twitter.com/stateofneptune"
                aria-label="State Of Neptune Twitter account link."
                showAbove="md"
                target="_blank"
              >
                <FaIcon icon={faTwitter}></FaIcon>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://www.youtube.com/@stateofneptune1864"
                aria-label="State Of Neptune YouTube account link."
                target="_blank"
              >
                <FaIcon icon={faYoutube}></FaIcon>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://open.spotify.com/artist/5FhQX1j6F5axsMOc1UiDmW"
                aria-label="State Of Neptune Spotify artist link."
                target="_blank"
              >
                <FaIcon icon={faSpotify}></FaIcon>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://stateofneptune.bandcamp.com/"
                aria-label="State Of Neptune Bandcamp artist link."
                target="_blank"
              >
                <FaIcon icon={faBandcamp}></FaIcon>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://music.apple.com/pl/artist/state-of-neptune/1570636107"
                aria-label="State Of Neptune Apple Music artist link."
                showAbove="lg"
                target="_blank"
              >
                <FaIcon icon={faItunesNote}></FaIcon>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://music.amazon.com/artists/B09RCQG8XZ/state-of-neptune"
                aria-label="State Of Neptune Amazon Music artist link."
                showAbove="lg"
                target="_blank"
              >
                <FaIcon icon={faAmazon}></FaIcon>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="https://www.deezer.com/us/artist/158840862"
                aria-label="State Of Neptune Deezer artist link."
                showAbove="lg"
                target="_blank"
              >
                <FaIcon icon={faDeezer}></FaIcon>
              </FooterNavItem>
            </li>

            <li>
              <FooterNavItem
                href="mailto:stateofneptune@gmail.com"
                aria-label="Mail to State Of Neptune."
              >
                <FaIcon icon={faEnvelope}></FaIcon>
              </FooterNavItem>
            </li>
          </ul>
        </nav>

        <div class="text-dim flex flex-col items-center justify-center text-center text-sm transition-[font-size] md:text-base">
          <p>© 2023 State Of Neptune – All Rights Reserved</p>

          <p>A&R Marcello Venditti</p>
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
