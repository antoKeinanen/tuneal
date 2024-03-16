import Image from "next/image";
import {
  EllipsisVerticalIcon,
  PauseIcon,
  PlusIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from "lucide-react";
import { MOC_DATA, type Song } from "./data";
import { key } from "~/lib/key";

function Play() {
  return (
    <main className="flex h-screen w-screen gap-6 bg-gradient-to-bl from-indigo-800 to-indigo-950 p-2">
      <section className="flex w-[30rem] flex-col justify-end">
        <div className="w-full rounded-xl bg-indigo-950 p-4">
          <Image
            src="/cover.webp"
            className="motion-safe:animate-slow-spin w-full select-none rounded-full"
            draggable="false"
            alt=""
            width="250"
            height="250"
          />
          <p className="mt-4 text-2xl font-semibold tracking-tight text-indigo-50">
            Fluorescent Adolescent
          </p>
          <p className="text-sm text-indigo-100">
            Arctic Monkeys • Favourite worst nightmare{" "}
          </p>

          <div className="mt-4 flex justify-center gap-6">
            <button className="rounded-full bg-indigo-50 p-2">
              <SkipBackIcon
                size={28}
                className="fill-indigo-950 stroke-indigo-950"
              />
            </button>
            <button className="rounded-full bg-indigo-50 p-2">
              <PauseIcon
                size={28}
                className="fill-indigo-950 stroke-indigo-950"
              />
            </button>
            <button className="rounded-full bg-indigo-50 p-2">
              <SkipForwardIcon
                size={28}
                className="fill-indigo-950 stroke-indigo-950"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="h-full w-full overflow-y-hidden rounded-xl bg-white p-6 py-3">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="mt-4 w-fit text-3xl font-bold">Up next:</h1>
          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-l from-indigo-800 to-indigo-900 px-4 py-2 text-lg text-indigo-50 hover:opacity-80">
            <PlusIcon /> Add Song
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
              {MOC_DATA.map((song, i) => (
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
  song,
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
        <Image
          src={song.cover}
          className="rounded-lg"
          alt=""
          width="50"
          height="50"
        />
      </td>
      <td className="text-indigo-800">{song.name}</td>
      <td className="text-indigo-800">{song.artist}</td>
      <td className="text-indigo-800">{song.addedBy}</td>
      <td className="text-indigo-800">{song.length}</td>
      <td className="text-indigo-800">
        <button className="text-indigo-800">
          <EllipsisVerticalIcon />
        </button>
      </td>
    </tr>
  );
}

export default Play;
