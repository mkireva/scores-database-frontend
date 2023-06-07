"use client";

import { useRouter, useSearchParams } from "next/navigation";
import SearchInput from "../SearchInput";

export default function SearchPage() {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const router = useRouter();

  const encodedSearchQuery = encodeURI(searchQuery || "");
  console.log(encodedSearchQuery);
  return <div>SEARCH PAGE</div>;
}
