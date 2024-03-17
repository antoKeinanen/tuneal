import { key } from "~/lib/key";
import { type Song } from "~/types/spotify";
import LoadingSpinner from "./loading-splinner";

export function LoadingQueueTable() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <LoadingSpinner />
        <p className="text-center text-2xl font-bold tracking-tight text-indigo-800">
          Loading your queue...
        </p>
      </div>
    </div>
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
      <td className="text-indigo-800">
        {new Date(song.duration_ms).toISOString().slice(11, -1)}
      </td>
    </tr>
  );
}

export function QueueTable({ queue }: { queue: Song[] }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="sticky top-0 bg-white">
          <th className="text-start text-indigo-800">Track</th>
          <th className="text-start text-indigo-800">Cover</th>
          <th className="text-start text-indigo-800">Name</th>
          <th className="text-start text-indigo-800">Artist</th>
          <th className="text-start text-indigo-800">Length</th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {queue.map((song, i) => (
          <PlaylistRow key={key()} song={song} trackNumber={i + 1} />
        ))}
      </tbody>
    </table>
  );
}
