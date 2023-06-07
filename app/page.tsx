import Scores from "./scores/page";
import { IScore } from "../typings";
import { getScores } from "./utils/server";
import Search from "./SearchInput";
import SearchInput from "./SearchInput";
import SearchTitle from "./SearchTitle";

export default async function Home() {
  const scores = await getScores();

  // const trimmedScores = scores.splice(0, 12);
  return (
    <div className="px-5 py-5">
      <div className="justify-center">
        <SearchTitle />
        <SearchInput />
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 p-2 mt-10 gap-x-3 ">
        {scores.length > 0 ? (
          <>
            {scores.map((score: IScore) => (
              <Scores score={score} key={score.scoreId} />
            ))}
          </>
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
}
