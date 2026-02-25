import { component$ } from "@builder.io/qwik";

import UnderlineLink from "../underline-link/underline-link";

export type LiveShowEntryProps = {
  country?: string;
  city?: string;
  host?: string;
  venue: string;
  with?: string[];
  date: string;
  cancelled?: boolean;
  href?: string;
};

export default component$((props: LiveShowEntryProps) => {
  const showDate = new Date(props.date);

  const showDateDisplay = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
  }).format(showDate);

  return (
    <>
      <div class="font-body text-body text-lg italic md:text-xl">
        <span class="font-bold">{props.venue}</span>

        {props.cancelled ? (
          <>
            <span class="text-warn"> [CANCELLED]</span>
          </>
        ) : (
          <></>
        )}
      </div>

      <div class="font-body text-body text-sm md:text-base">
        {showDateDisplay} ~ {props.city}, {props.country}
      </div>

      {props.with && props.with.length > 0 ? (
        <div class="font-body text-dim text-sm md:text-base">
          with: {props.with.join(", ")}
        </div>
      ) : (
        <></>
      )}

      {props.href && !props.cancelled && showDate > new Date() ? (
        <>
          <UnderlineLink class="text-dim" href={props.href} external>
            Link to event
          </UnderlineLink>
        </>
      ) : (
        <></>
      )}
    </>
  );
});
