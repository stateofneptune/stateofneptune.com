import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import Heading from "~/components/heading/heading";
import Paragraph from "~/components/paragraph/paragraph";
import Title from "~/components/title/title";
import UnderlineLink from "~/components/underline-link/underline-link";

export default component$(() => {
  return (
    <>
      <Title>Privacy Policy</Title>

      <section class="flex w-full justify-center">
        <div class="flex w-[80ch] flex-col gap-6">
          <Paragraph>
            This Policy explains how your personal data may be processed when
            you visit and browse our website and social media channels.
          </Paragraph>

          <Heading id="policy">We don't collect any personal data</Heading>

          <Paragraph>
            This website (
            <UnderlineLink href="/">www.stateofneptune.com</UnderlineLink>
            ) does not collect any personal data. Our definition of "personal
            data" is based on the privacy laws and regulation of the EU,
            including the General Data Protection Regulation (GDPR). We consider
            any information about you or your behaviour that can be tracked back
            as personal data. Our only interests are informing you about our
            content and enabling you to contact us.
            <br />
            Therefore:
          </Paragraph>

          <ul class="list-inside list-[square] font-body text-lg">
            <li>
              We do not collect any data whatsoever about people who visit our
              site.
            </li>
            <li>We do not conduct any analysis of how people use our site.</li>
            <li>
              We do not allow third-party tracking of any kind on this site.
            </li>
          </ul>

          <Heading id="disclosure">
            We don't disclose or sell your contact information
          </Heading>

          <Paragraph>
            When you contact us via e-mail, we'll use your contact information
            to respond to you. We won't share (nor sell) this information to
            anyone else.
          </Paragraph>

          <Heading id="third-party">
            Third-party cookies, data processing and retention
          </Heading>

          <Paragraph>
            We selected Cloudflare Pages as our host service. In order to
            provide this service, Cloudflare processes the Internet Protocol
            (IP) address of the device accessing the site and other traffic data
            including the browser software, the operating system and the device
            in use. This information is processed for the purpose of diagnosing
            technical problems and defending against attacks.
          </Paragraph>

          <Heading id="changes">Changes and revisions</Heading>

          <Paragraph>
            We may update this Policy in the future. We will track such changes
            in this section.
          </Paragraph>

          <p class="font-body text-sm text-dim md:text-base">
            Policy published 9th August 2023 – Policy updated 9th August 2023.
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
