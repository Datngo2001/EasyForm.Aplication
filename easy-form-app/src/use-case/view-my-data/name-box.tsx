"use client";

import useAppSession from "@/hooks/useAppSession";
import { useEffect, useState } from "react";

export default function NameBox() {
  const { data: session, status } = useAppSession();
  const [name, setName] = useState(null);

  const click = () => {
    fetch("https://localhost:7258/users/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken: session.idToken,
      }),
    })
      .then((res) => res.json())
      .then((res) => setName(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <p>{status}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={click}
      >
        Call API
      </button>
    </div>
  );
}
