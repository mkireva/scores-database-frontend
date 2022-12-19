"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { IPropsScore } from "../../../typings";

export default function Accordeon(props: IPropsScore) {
  const { score } = props;

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsActive(!isActive)}
        className="flex group cursor-pointer w-3/4 mx-auto h-16 justify-between items-center p-2 mt-2 rounded-md bg-white hover:bg-sky-500  focus:bg-sky-500 "
      >
        <div className=" cursor-pointer">
          <div className="sm:text-small md:text-xl mx-auto font-extrabold text-sky-600 pl-10 group-hover:text-white">
            {score.title}
          </div>
          <div className="sm:text-small md:text-sm mx-auto font-extrabold text-sky-600 pl-10 group-hover:text-white">
            {score.subTitle}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10 ">
          {isActive ? (
            <MinusIcon className="w-6 h-6 group-hover:text-white text-sky-600" />
          ) : (
            <PlusIcon className="w-6 h-6 group-hover:text-white text-sky-600" />
          )}
        </div>
      </div>
      {isActive && (
        <div className="grid md:grid-cols-2 sm:grid-cols-2 bg-sky-100 pl-10 mx-auto text-sky-700 w-3/4 h-auto rounded-md p-4 border-l-2 border-sky-300 mb-2 ">
          <div className="flex">
            <div className="flex-none w-14 font-bold">music: </div>
            <div className="flex-none ...">{score.author}</div>
          </div>
          <div className="flex">
            <div className="flex-none w-10 font-bold">text: </div>
            <div className="flex-none ...">{score.text}</div>
          </div>
          <div className="flex">
            <div className="flex-none w-12 font-bold">color: </div>
            <div className="flex-none">{score.color}</div>
          </div>
          <div className="flex">
            <div className="flex-none w-10 font-bold">key: </div>
            <div className="flex-none ...">{score.key}</div>
          </div>
          <div className="flex">
            <div className="flex-none w-20 font-bold">category: </div>
            <div className="flex-none">{score.category}</div>
          </div>
          <div className="flex">
            <div className="flex-none w-12 font-bold">date: </div>
            <div className="flex-none">{score.createdAt}</div>
          </div>
        </div>
      )}
    </>
  );
}
