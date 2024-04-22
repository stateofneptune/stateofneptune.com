import { component$ } from "@builder.io/qwik";
import type { JSXNode } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Title from "~/components/title/title";
import Paragraph from "~/components/paragraph/paragraph";
import Heading from "~/components/heading/heading";
import LiveShowEntry from "~/components/live-show-entry/live-show-entry";

import type { LiveShow } from "./live-shows";

import { LIVE_SHOWS } from "./live-shows";

type LiveShowGroup = {
  year: number;
  shows: LiveShow[];
};

function insertSorted<T>(compare: (a: T) => boolean, item: T, bucket: T[]) {
  const idxInto = bucket.findIndex(compare);

  return idxInto > -1 ? bucket.splice(idxInto, 0, item) : bucket.concat(item);
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
              shows.upcoming.reduceRight(
                (upcomingShows: JSXNode[], group, id) =>
                  upcomingShows.concat(
                    <>
                      <h3
                        id={group.year.toString()}
                        key={id}
                        class="font-body text-xl"
                      >
                        {group.year}
                      </h3>

                      <ul>
                        {group.shows.reduceRight(
                          (acc: JSXNode[], show) =>
                            acc.concat(
                              <>
                                <li id={show.date} key={show.date}>
                                  <LiveShowEntry {...show} />
                                </li>
                              </>
                            ),
                          []
                        )}
                      </ul>
                    </>
                  ),
                []
              )
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
                  {group.shows.map(
                    (show) =>
                      !show.cancelled && (
                        <li id={show.date} key={show.date}>
                          <LiveShowEntry {...show} />
                        </li>
                      )
                  )}
                </ul>
              </>
            ))}
          </div>
        </section>
      </section>
    </>
  );
});

const META_DESCRIPTION =
  "Palermo, Italy punk stoner trio State Of Neptune's official tour dates. \
Get updates about upcoming live shows.";

export const head: DocumentHead = {
  title: "Tour",
  meta: ["description", "og:description", "twitter:description"].map(
    (name) => ({
      content: META_DESCRIPTION,
      name,
    })
  ),
};
