import { MusicalNoteIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function SearchTitle() {
  return (
    <div className="flex flex-col w=1/2 space-y-2 justify-center sm:space-y-0 sm:flex-row sm:space-x-1">
      <MusicalNoteIcon className="h-8 w-8 text-blue-500" />
      <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text">
        Scores
      </h1>
    </div>
  );
}
