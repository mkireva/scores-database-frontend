"use client";

import {
  MicrophoneIcon,
  MusicalNoteIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import SearchTitle from "./SearchTitle";

export default function SearchInput() {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : ""
  );
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  };

  return (
    <form onSubmit={onSearch} className="flex flex-col mt-44 flex-grow">
      <input
        value={searchQuery || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        type="text"
        className="flex-grow focus:outline-none flex w-full hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 item-center sm:max-w-xl lg:max-w-2xl"
      />

      <div className="flex flex-col w=1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button className="btn">Song Search</button>
        <button className="btn">I am Feeling lucky</button>
      </div>
    </form>
  );
}
