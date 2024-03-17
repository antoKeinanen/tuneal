"use client";
import { SessionProvider } from "next-auth/react";

function PrimaryLayout({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default PrimaryLayout;
