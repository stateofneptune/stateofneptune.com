import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";

import Heading from "~/components/heading/heading";
import Paragraph from "~/components/paragraph/paragraph";
import Title from "~/components/title/title";

export default component$(() => {
  return (
    <>
      <section class="flex w-full justify-center">
        <div class="w-[80ch]">
          <div class="mb-6">
            <Title>Privacy Policy</Title>
          </div>

          <div class="mb-6">
            <Paragraph>
              This Policy explains how your personal data may be processed when
              you visit and browse our website and social media channels.
            </Paragraph>
          </div>

          <div class="mb-6">
            <Heading>We don't collect any personal data</Heading>
          </div>
          <div class="mb-6">
            <Paragraph>
              This website (
              <Link
                class="decoration-accent underline-offset-2 focus-within:underline hover:underline"
                href="/"
              >
                www.stateofneptune.com
              </Link>
              ) does not collect any personal data. Our definition of "personal
              data" is based on the privacy laws and regulation of the EU,
              including the General Data Protection Regulation (GDPR). We
              consider any information about you or your behaviour that can be
              tracked back as personal data. Our only interests are informing
              you about our content and enabling you to contact us. Therefore:
            </Paragraph>

            <ul class="list-inside list-[square] font-body text-lg">
              <li>
                We do not set any cookies at all on this site or your own
                device.
              </li>
              <li>
                We do not collect any data whatsoever about people who visit our
                site.
              </li>
              <li>
                We do not conduct any analysis of how people use our site.
              </li>
              <li>
                We do not allow third-party tracking of any kind on this site.
              </li>
            </ul>
          </div>

          <div class="mb-6">
            <Heading>
              We don't disclose or sell your contact information
            </Heading>
          </div>
          <div class="mb-6">
            <Paragraph>
              When you contact us via e-mail, we'll use your contact information
              to contact you. We won't share (nor sell) this information to
              anyone else.
            </Paragraph>
          </div>

          <div class="mb-6">
            <Heading>Third-party data processing and retention</Heading>
          </div>
          <div class="mb-6">
            <Paragraph>
              We selected Cloudflare Pages as our host service. In order to
              provide this service, Cloudflare processes the Internet Protocol
              (IP) address of the device accessing the site and other traffic
              data including the browser software and the operating system in
              use. This information is processed for the purpose of diagnosing
              technical problems and defending against attacks.
            </Paragraph>
          </div>

          <div class="mb-6">
            <Heading>Changes and revisions</Heading>
          </div>
          <div class="mb-6">
            <Paragraph>
              We may update this Policy in the future. We will track such
              changes in this section.
            </Paragraph>
          </div>

          <p class="font-body text-sm text-dim md:text-base">
            Policy published 5th August 2023 – Policy updated 5th August 2023.
          </p>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Privacy Policy - SON",
  meta: [],
};
