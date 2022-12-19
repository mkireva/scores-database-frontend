import { notFound } from "next/navigation";
import { PageProps } from "../../../typings";
import { getScoresById } from "../../utils/server";
import Accordeon from "./Accordeon";

export const dynamicParams = true;

async function ScorePage({ params: { scoreId } }: PageProps) {
  const score = await getScoresById(scoreId);
  if (!score.scoreId) return notFound();

  return (
    <div className="mt-34 pl-5 pr-5 container md:container md:mx-auto mt-10">
      <Accordeon score={score} />
      <div className="h-96 p-20">
        <div className="h-full">{score.url}</div>
      </div>
      <div className="w-3/4 mx-auto items-center p-2 mt-2 text-gray-800">
        <div className="md:text-lg font-extrabold text-sky-600">
          Description:
        </div>
        <div className="w-full tracking-wide">{score.description}</div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 mx-auto p-2 mt-2 text-gray-800 gap-x-4">
        <div>
          <div className="md:text-lg font-extrabold text-sky-600">
            Lyrics BG:
          </div>
          <div className=" items-center ">{score.lyrics}</div>
        </div>
        <div>
          <div className="md:text-lg font-extrabold text-sky-600">
            Lyrics DE:
          </div>
          <div className=" items-center ">{score.lyrics}</div>
        </div>
        <div>
          <div className="md:text-lg font-extrabold text-sky-600">
            Lyrics En:
          </div>
          <div className=" items-center ">{score.lyrics}</div>
        </div>
      </div>
    </div>
  );
}

export default ScorePage;
