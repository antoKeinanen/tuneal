"use client";
import { IconPlus } from "@tabler/icons-react";

import { api } from "~/trpc/react";
import { Turntable, TurntableLoading } from "~/components/turntable";
import { LoadingQueueTable, QueueTable } from "~/components/queue-table";

function Play() {
  const { data: queueData, isLoading: queueLoading } =
    api.queue.getMyQueue.useQuery();
  const { data: songData, isLoading: songLoading } =
    api.song.getCurrentSong.useQuery();

  return (
    <main className="flex h-screen w-screen gap-6 bg-gradient-to-bl from-indigo-800 to-indigo-950 p-2">
      {songLoading || !songData ? (
        <TurntableLoading />
      ) : (
        <Turntable songData={songData.currentSong} />
      )}
      <section className="h-full w-full overflow-y-hidden rounded-xl bg-white p-6 py-3">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="mt-4 w-fit text-3xl font-bold">Up next:</h1>
          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-l from-indigo-800 to-indigo-900 px-4 py-2 text-lg text-indigo-50 hover:opacity-80">
            <IconPlus /> Add Song
          </button>
        </div>
        <div className="mt-4 h-full w-full overflow-y-scroll pb-16 pr-4">
          {queueLoading || !queueData ? (
            <LoadingQueueTable />
          ) : (
            <QueueTable queue={queueData?.queue} />
          )}
        </div>
      </section>
    </main>
  );
}

export default Play;
