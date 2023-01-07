"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IScore } from "../../../typings";
import { updateScore } from "../../utils/server";
import Input from "../Input";

interface Props {
  score: IScore;
}

const UpdateScore: React.FC<Props> = ({ score }) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(score.title);

  const [author, setAuthor] = useState<string>(score.author);
  const [url, setUrl] = useState<string>(score.url);
  const [lyrics, setLyrics] = useState<string>(score.lyrics);
  const [category, setCategory] = useState<string>(score.category);
  const [color, setColor] = useState<string>(score.color);
  const [createdAt, setCreatedAt] = useState<string>(score.createdAt);
  const [scoreDate, setScoreDate] = useState<Date>(new Date());
  const [text, setText] = useState<string>(score.text);
  const [key, setKey] = useState<string>(score.key);
  const [subTitle, setSubTitle] = useState<string>(score.subTitle);
  const [description, setDescription] = useState<string>(score.description);

  const handleUpdateScore = async (
    value: Partial<IScore>,
    refresh: () => void
  ) => {
    setIsFetching(true);
    await updateScore({
      ...score,
      ...value,
    });
    refresh();
    setIsEditing(false);
    setIsFetching(false);
  };
  return (
    <div className="flex flex-col items-center mt-44 flex-grow p-10">
      <div className="flex flex-col w=1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-1">
        <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text">
          Update Score
        </h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdateScore(
            {
              title,
              subTitle,
              author,
              text,
              url,
              lyrics,
              category,
              color,
              createdAt,
              key,
              description,
              scoreDate,
            },
            router.refresh
          );
          console.log(title);
        }}
      >
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 gap-x-10 mt-10">
          <Input
            name="score"
            value={title}
            onChange={(value) => {
              setTitle(value);
            }}
          />
          <Input
            name="subTitle"
            value={subTitle}
            onChange={(value) => {
              setSubTitle(value);
            }}
          />

          <Input
            name="author"
            value={author}
            onChange={(value) => {
              setAuthor(value);
            }}
          />
          <Input
            name="text"
            value={text}
            onChange={(value) => {
              setText(value);
            }}
          />

          <Input
            name="url"
            value={url}
            onChange={(value) => {
              setUrl(value);
            }}
          />
          <Input
            name="color"
            value={color}
            onChange={(value) => {
              setColor(value);
            }}
          />
          <Input
            name="category"
            value={category}
            onChange={(value) => {
              setCategory(value);
            }}
          />
          <Input
            name="lyrics"
            value={lyrics}
            onChange={(value) => {
              setLyrics(value);
            }}
          />
          <Input
            name="createdAt"
            value={createdAt}
            onChange={(value) => {
              setCreatedAt(value);
            }}
          />
          <Input
            name="scoreDate"
            value={key}
            onChange={(value) => {
              setKey(value);
            }}
          />
          <Input
            name="description"
            value={description}
            onChange={(value) => {
              setDescription(value);
            }}
          />
          {/* <input
            type="text"
            placeholder="created Date"
            value={scoreDate.getFullYear()}
            onChange={(e) => setScoreDate(new Date())}
          /> */}
        </div>
        <button
          type="submit"
          className="btn w-full bg-sky-500 uppercase text-sky-50 mt-8 font-semibold text-xl"
        >
          update score
        </button>
      </form>
    </div>
  );
};

export default UpdateScore;
