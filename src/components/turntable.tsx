import {
  IconPlayerPause,
  IconPlayerSkipBack,
  IconPlayerSkipForward,
} from "@tabler/icons-react";
import { type Song } from "~/types/spotify";

export function TurntableLoading() {
  return (
    <section className="flex w-[30rem] flex-col justify-end">
      <div className="w-full rounded-xl bg-indigo-950 p-4">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="aspect-square w-[full] motion-safe:animate-pulse rounded-full bg-indigo-500"></div>
          <span className="absolute right-1/2 top-1/2 h-8 w-8 -translate-y-1/2 translate-x-1/2 rounded-full border-[6px] border-indigo-600 bg-indigo-950"></span>
        </div>
        <div className="mt-4 flex gap-2">
          <div className="h-8 w-36 rounded-lg bg-indigo-500 motion-safe:animate-pulse"></div>
          <div className="h-8 w-28 rounded-lg bg-indigo-500 motion-safe:animate-pulse"></div>
        </div>
        <div className="mt-1 flex gap-2">
          <div className="h-5 w-10 rounded-lg bg-indigo-500 motion-safe:animate-pulse"></div>
          <div className="h-5 w-14 rounded-lg bg-indigo-500 motion-safe:animate-pulse"></div>
          <div className="h-5 w-14 rounded-lg bg-indigo-500 motion-safe:animate-pulse"></div>
          <div className="h-5 w-10 rounded-lg bg-indigo-500 motion-safe:animate-pulse"></div>
          <div className="h-5 w-14 rounded-lg bg-indigo-500 motion-safe:animate-pulse"></div>
        </div>

        <div className="mt-4 flex justify-center gap-6">
          <div className="h-12 w-12 rounded-full bg-indigo-500 p-3 motion-safe:animate-pulse"></div>
          <div className="h-12 w-12 rounded-full bg-indigo-500 p-3 motion-safe:animate-pulse"></div>
          <div className="h-12 w-12 rounded-full bg-indigo-500 p-3 motion-safe:animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export function Turntable({ songData }: { songData: Song }) {
  return (
    <section className="flex w-[30rem] flex-col justify-end">
      <div className="w-full rounded-xl bg-indigo-950 p-4">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={songData.coverImage}
            className="w-full select-none rounded-full motion-safe:animate-slow-spin"
            draggable="false"
            alt=""
            width="250"
            height="250"
          />
          <span className="absolute right-1/2 top-1/2 h-8 w-8 -translate-y-1/2 translate-x-1/2 rounded-full border-[6px] border-indigo-600 bg-indigo-950"></span>
        </div>
        <p className="mt-4 text-2xl font-semibold tracking-tight text-indigo-50">
          {songData.name}
        </p>
        <p className="text-sm text-indigo-100">
          {songData.artists.join(", ")} • {songData.album}
        </p>

        <div className="mt-4 flex justify-center gap-6">
          <button className="h-12 w-12 rounded-full bg-indigo-50 p-3">
            <IconPlayerSkipBack
              size={25}
              className="fill-indigo-950 stroke-indigo-950"
            />
          </button>
          <button className="h-12 w-12 rounded-full bg-indigo-50 p-3">
            <IconPlayerPause
              size={25}
              className="fill-indigo-950 stroke-indigo-950"
            />
          </button>
          <button className="h-12 w-12 rounded-full bg-indigo-50 p-3">
            <IconPlayerSkipForward
              size={25}
              className="fill-indigo-950 stroke-indigo-950"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
