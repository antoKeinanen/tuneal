"use client";
import { IconPlus, IconDotsVertical } from "@tabler/icons-react";

import { key } from "~/lib/key";
import { api } from "~/trpc/react";
import { type Song } from "~/types/spotify";
import { Turntable, TurntableLoading } from "~/components/turntable";

function Play() {
  const { data: queueData } = api.queue.getMyQueue.useQuery();
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
        <div className="mt-4 h-full w-full overflow-y-scroll pb-16">
          <table className="w-full">
            <thead mt-0>
              <tr className="sticky top-0 bg-white">
                <th className="text-start text-indigo-800">Track</th>
                <th className="text-start text-indigo-800">Cover</th>
                <th className="text-start text-indigo-800">Name</th>
                <th className="text-start text-indigo-800">Artist</th>
                <th className="text-start text-indigo-800">Added by</th>
                <th className="text-start text-indigo-800">Length</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {queueData?.queue.map((song, i) => (
                <PlaylistRow key={key()} song={song} trackNumber={i + 1} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

function PlaylistRow({
  song: song,
  trackNumber,
}: {
  song: Song;
  trackNumber: number;
}) {
  return (
    <tr>
      <td className="text-indigo-800">
        {trackNumber.toString().padStart(2, "0")}
      </td>
      <td className="text-indigo-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={song.coverImage}
          className="rounded-lg"
          alt=""
          width="50"
          height="50"
        />
      </td>
      <td className="text-indigo-800">{song.name}</td>
      <td className="text-indigo-800">{song.artists.join(", ")}</td>
      <td className="text-indigo-800">{"TODO"}</td>
      <td className="text-indigo-800">
        {new Date(song.duration_ms).toISOString().slice(11, -1)}
      </td>
      <td className="text-indigo-800">
        <button className="text-indigo-800">
          <IconDotsVertical />
        </button>
      </td>
    </tr>
  );
}

export default Play;
