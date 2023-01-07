"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { IPropsScore } from "../../typings";
import { deleteScore } from "../utils/server";

export default function DeleteScoreItem(props: IPropsScore) {
  const { score } = props;
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const isMutating = isFetching || isPending;

  const handleDeleteScore = async (scoreId: string, refresh: () => void) => {
    setIsFetching(true);
    await deleteScore(scoreId);
    refresh();
    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <>
      {score.scoreId && (
        <button style={{ opacity: !isMutating ? 1 : 0.7 }}>
          <TrashIcon
            type="button"
            onClick={() => handleDeleteScore(score.scoreId, router.refresh)}
            className="h-6 w-6 text-red-500"
          />
        </button>
      )}
    </>
  );
}
