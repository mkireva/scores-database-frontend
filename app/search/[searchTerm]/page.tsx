import React from "react";

type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResults = {
  results: [title: string];
};

const search = async (searchTerm: string) => {
  const res = await fetch(`http://localhost:8000/api/scores/${searchTerm}`);
  const data: SearchResults = await res.json();
  return data;
};

const SearchResults = async ({ params: { searchTerm } }: PageProps) => {
  const searchResults = await search(searchTerm);
  return (
    <div>
      <p className="text-gray-500 text-sm"> You searched for: {searchTerm}</p>
      <ol>
        {searchResults.results.map((result: any) => (
          <li key={result.scoreid}>
            <p>{result.title}</p>
            <p>{result.lyric}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
