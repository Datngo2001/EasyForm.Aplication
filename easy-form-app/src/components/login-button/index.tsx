"use client";

import useAppSession from "@/hooks/useAppSession";
import { signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useAppSession();

  if (session) {
    return (
      <>
        <p>Signed in as {session.user?.email}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <p>Not signed in</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
