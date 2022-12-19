import { IScore } from "../../typings";

export const getScores = async () => {
    const res = await fetch("http://localhost:8000/api/scores");
    const scores: IScore[] = await res.json();
    return scores;
  };

 export const getScoresById = async (scoreId: string) => {
    const res = await fetch(`http://localhost:8000/api/scores/${scoreId}`, {
      cache: "no-store",
    });
    const score: IScore = await res.json();
    return score;
  };
  