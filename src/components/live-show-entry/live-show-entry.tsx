import { component$ } from "@builder.io/qwik";

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

  const year = new Intl.DateTimeFormat("en", {
    year: "numeric",
  }).format(showDate);

  const month = new Intl.DateTimeFormat("en", {
    month: "short",
  }).format(showDate);

  const day = new Intl.DateTimeFormat("en", {
    day: "2-digit",
  }).format(showDate);

  return (
    <>
      <div class="font-body text-body">
        {day} {month} {year} – {props.city}, {props.country}
      </div>

      <div class="font-body text-body text-lg italic">
        <span class="font-bold">{props.venue}</span>
        {props.cancelled ? (
          <>
            <span class="text-warn"> [CANCELLED]</span>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
});
