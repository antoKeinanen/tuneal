"use client";
import { useSession } from "next-auth/react";
import { api } from "~/trpc/react";

export default function Home() {
  const { data: session } = useSession();
  const { data } = api.queue.getMyQueue.useQuery();
  console.log(data);

  return <main className="">{session?.user.name}</main>;
}
