import { component$ } from "@builder.io/qwik";

import Paragraph from "../paragraph/paragraph";

export type LiveShowEntryProps = {
  country?: string;
  city?: string;
  host?: string;
  venue: string;
  date: string;
  cancelled?: boolean;
};

export default component$((props: LiveShowEntryProps) => {
  const showDate = new Date(props.date);

  const month = new Intl.DateTimeFormat("en", {
    month: "short",
  }).format(showDate);

  const day = new Intl.DateTimeFormat("en", {
    day: "2-digit",
  }).format(showDate);

  return (
    <>
      <Paragraph>
        {props.cancelled ? (
          <>
            {`${month} ${day} – ${props.city}, ${props.country} – ${props.venue}`}

            <span class="text-warn"> [CANCELLED]</span>
          </>
        ) : (
          <>
            {`${month} ${day} – ${props.city}, ${props.country} – ${props.venue}`}
          </>
        )}
      </Paragraph>
    </>
  );
});
