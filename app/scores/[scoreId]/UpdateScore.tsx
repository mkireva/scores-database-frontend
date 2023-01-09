"use client";

import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useState, useTransition } from "react";
import { IPropsScore } from "../../../typings";

export default function UpdateScore(props: IPropsScore) {
  const { score } = props;
  const [scoreId, setScoreId] = useState<string>(score.scoreId);
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
  const [isFetching, setIsFetching] = useState(false);
  const [isPending, startTransition] = useTransition();
  const isMutating = isFetching || isPending;
  const router = useRouter();

  const updateScore = async () => {
    setIsFetching(true);
    await fetch(`http://localhost:8000/api/scores/${score.scoreId}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
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
        scoreId,
      }),
    });
    setTitle("");
    setAuthor("");
    setSubTitle("");
    setUrl("");
    setLyrics("");
    setCategory("");
    setColor("");
    setKey("");
    setCreatedAt("");
    setScoreDate(new Date());
    setText("");
    setDescription("");
    setScoreId(uuidv4());
    setIsFetching(false);

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <>
      <form
        onSubmit={updateScore}
        className="flex flex-col items-center mt-44 flex-grow p-10"
      >
        <div className="flex flex-col w=1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-1">
          <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text">
            Update Score
          </h1>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 gap-x-10 mt-10">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Title
            </span>
            <input
              style={{ opacity: !isMutating ? 1 : 0.7 }}
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Subtitle
            </span>
            <input
              type="text"
              placeholder="subTitle"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
              className=" w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              music
            </span>
            <input
              type="text"
              placeholder="music"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Text
            </span>
            <input
              type="text"
              placeholder="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              url
            </span>
            <input
              type="text"
              placeholder="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Category
            </span>
            <input
              type="text"
              placeholder="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className=" w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              key
            </span>
            <input
              type="text"
              placeholder="key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className=" w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Color
            </span>
            <input
              type="text"
              placeholder="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className=" w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              created date
            </span>
            <input
              type="text"
              placeholder="created Date"
              value={createdAt}
              onChange={(e) => setCreatedAt(e.target.value)}
              className=" w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non"
            />
          </label>
        </div>
        <div className="mt-10">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              lyrics
            </span>
            <textarea
              placeholder="lyrics"
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
              className="
            w-96
            px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid b
          order-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non"
            />
          </label>
        </div>
        <div>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              description
            </span>
            <textarea
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            w-96
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non"
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn w-3/6 bg-sky-500 uppercase text-sky-50 mt-8 font-semibold text-xl"
        >
          Update Score
        </button>
      </form>
    </>
  );
}
