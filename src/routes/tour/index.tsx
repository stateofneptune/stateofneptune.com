import { component$ } from "@builder.io/qwik";

import Title from "~/components/title/title";
import Paragraph from "~/components/paragraph/paragraph";
import Heading from "~/components/heading/heading";

import type { LiveShow } from "./live-shows";
import { LIVE_SHOWS } from "./live-shows";
import type { DocumentHead } from "@builder.io/qwik-city";

type LiveShowGroup = {
  year: number;
  shows: LiveShow[];
};

function insertSorted<T>(compare: (a: T) => boolean, item: T, bucket: T[]) {
  const idxInto = bucket.findIndex(compare);

  return idxInto > -1 ? bucket.splice(idxInto, 0, item) : bucket.concat(item);
}

function formatShowDate(show: LiveShow) {
  const showDate = new Date(show.date);

  const month = new Intl.DateTimeFormat("en", {
    month: "short",
  }).format(showDate);

  const day = new Intl.DateTimeFormat("en", {
    day: "2-digit",
  }).format(showDate);

  return `${month} ${day} – ${show.city}, ${show.country} – ${show.venue}`;
}

export default component$(() => {
  const currentDate = new Date(new Date().toDateString());

  const shows = LIVE_SHOWS.reduce(
    (acc: { upcoming: LiveShowGroup[]; past: LiveShowGroup[] }, show) => {
      const showDate = new Date(show.date);

      if (showDate) {
        const year = showDate.getFullYear();
        const isPast = showDate < currentDate;
        const group = (isPast ? acc.past : acc.upcoming).find(
          (g) => g.year === year
        );

        if (group) {
          group.shows = insertSorted(
            (a) => a.date < show.date,
            show,
            group.shows
          );
        } else {
          const item = {
            shows: [show],
            year,
          };

          if (isPast) {
            acc.past = insertSorted((g) => g.year < year, item, acc.past);
          } else {
            acc.upcoming = insertSorted(
              (g) => g.year < year,
              item,
              acc.upcoming
            );
          }
        }
      }

      return acc;
    },
    { upcoming: [], past: [] }
  );

  return (
    <>
      <Title>Tour</Title>

      <section class="my-12 px-6">
        <section class="flex w-full justify-center">
          <div class="flex w-[60ch] flex-col gap-6">
            <Heading id="upcoming">Upcoming shows</Heading>

            {shows.upcoming.length === 0 ? (
              <Paragraph>
                <span class="text-dim">No shows planned at the moment.</span>
              </Paragraph>
            ) : (
              shows.upcoming.reverse().map((group, id) => (
                <>
                  <h3
                    id={group.year.toString()}
                    key={id}
                    class="font-body text-xl"
                  >
                    {group.year}
                  </h3>

                  <ul>
                    {group.shows.reverse().map((show) => (
                      <li key={show.date}>
                        <Paragraph>
                          <span
                            class={[
                              show.cancelled && "line-through decoration-1",
                            ]}
                          >
                            {formatShowDate(show)}
                          </span>
                        </Paragraph>
                      </li>
                    ))}
                  </ul>
                </>
              ))
            )}
          </div>
        </section>

        <section class="flex w-full justify-center">
          <div class="mt-12 flex w-[60ch] flex-col gap-6 border-t border-light-bg pt-12">
            <Heading id="past">Past shows</Heading>
            {shows.past.map((group, id) => (
              <>
                <h3
                  id={group.year.toString()}
                  key={id}
                  class="font-body text-xl"
                >
                  {group.year}
                </h3>

                <ul>
                  {group.shows.map((show) => (
                    <li key={show.date}>
                      <Paragraph>{formatShowDate(show)}</Paragraph>
                    </li>
                  ))}
                </ul>
              </>
            ))}
          </div>
        </section>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Tour",
  meta: [
    {
      name: "description",
      content: "State Of Neptune live shows.",
    },
    {
      property: "og:description",
      content: "State Of Neptune live shows.",
    },
    {
      property: "og:url",
      content: "https://www.stateofneptune.com/tour",
    },
    {
      property: "twitter:description",
      content: "State Of Neptune live shows.",
    },
  ],
};
