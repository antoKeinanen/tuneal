"use client";
import { IconBrandSpotify } from "@tabler/icons-react";
import { signIn, signOut } from "next-auth/react";

function Login() {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gradient-to-bl from-indigo-800 to-indigo-950">
      <section className="flex w-96 flex-col items-center rounded-xl bg-indigo-950 px-8 py-4">
        <h1 className="text-3xl font-bold text-indigo-50">Sign up or Login</h1>
        <button
          onClick={() => signIn("spotify")}
          className="mt-6 flex items-center gap-2 rounded-xl bg-[#1db954] px-4 py-2 text-lg text-[#191414] hover:opacity-80"
        >
          <IconBrandSpotify size={26} /> Login with spotify
        </button>
        <p className="mt-4 text-center text-indigo-200">
          By logging in, you agree to our terms of service and privacy policy.
        </p>
        <button onClick={() => signOut()}>Logout</button>
      </section>
    </main>
  );
}

export default Login;
