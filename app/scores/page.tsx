import Link from "next/link";
import { IPropsScore, IScore } from "../../typings";

export default function ScoresPage(props: IPropsScore) {
  const { score } = props;
  return (
    <>
      <div className="flex flex-col items-center mt-10 gap-x-3 flex-grow ">
        <div className="max-w-md w-full rounded overflow-hidden shadow-lg bg-gray-100">
          <div className="p-7">
            <div className="font-bold text-sky-600 mb-4 uppercase">
              <Link href={`/scores/${score.scoreId}`}>
                <div>{score.title}</div>
                <div className="font-semibold text-sm">{score.subTitle}</div>
              </Link>
            </div>
            <p className="text-gray-700 text-base">
              <strong>music:</strong> {score.author}
            </p>
            <p className="text-gray-700 text-base">
              <strong>text:</strong> {score.text}
            </p>
            <p className="text-gray-700 text-base">
              <strong>date:</strong> {score.createdAt}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-sky-200 rounded-full px-3 py-1 text-sm font-semibold text-sky-700 mr-2 mb-2">
              #{score.color}
            </span>
            <span className="inline-block bg-sky-200 rounded-full px-3 py-1 text-sm font-semibold text-sky-700 mr-2 mb-2">
              #{score.key}
            </span>
            <span className="inline-block bg-sky-200 rounded-full px-3 py-1 text-sm font-semibold text-sky-700 mr-2 mb-2 lowercase">
              #{score.category}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
