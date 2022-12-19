export interface IScore {
  url: string;
  lyrics: string;
  category: string;
  color: string;
  key: string;
  createdAt: string;
  scoreDate: Date;
  text: string;
  author: string;
  title: string;
  subTitle: string;
  scoreId: string;
  description: string;
}

export interface IPropsScore {
  score: IScore;
}

type PageProps = {
  params: {
    scoreId: string;
  };
};
