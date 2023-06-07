import React from "react";
import SearchInput from "../SearchInput";
import Search from "../SearchInput";
import SearchTitle from "../SearchTitle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex space-x-4 p-5">
      <div>
        <SearchTitle />
      </div>
      <div className="flex-1 pl-5">
        <SearchInput />
        <div>{children}</div>
      </div>
    </main>
  );
}
