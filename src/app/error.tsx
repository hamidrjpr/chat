"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // log the error to the console
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2 p-4 rounded-md ring-1 ring-inset ring-amber-300">
        <h1 className="text-2xl text-red-500">یک ارور به وجود آمده</h1>
        <p className="text-red-300 text-sm">{error.message}</p>
        <button
          className="rounded-sm ring-1 ring-inset ring-green-400 px-2 py-1"
          onClick={() => reset()}
        >
          تلاش مجدد
        </button>
      </div>
    </section>
  );
}
