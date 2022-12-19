import Scores from "./scores/page";
import { IScore } from "../typings";
import { getScores } from "./utils/server";
import Search from "./Search";

export default async function Home() {
  const scores = await getScores();
  const trimmedScores = scores.splice(0, 12);
  return (
    <div className="px-5 py-5">
      <Search />
      <div className="grid md:grid-cols-2 sm:grid-cols-1 p-2 mt-10 gap-x-3 ">
        {trimmedScores.map((score: IScore) => (
          <Scores score={score} key={score.scoreId} />
        ))}
      </div>
    </div>
  );
}
