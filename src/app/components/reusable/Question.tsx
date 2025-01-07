"use client";

import { useState } from "react";

import CustomIcon from "./CustomIcon";

interface QuestionProps {
  question?: string;
  answer?: string;
}

export default function Question({ question, answer }: QuestionProps) {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-row items-center justify-between p-6 my-6 shadow-2xl w-full cursor-pointer">
        <p className="text-primary">
          {question ?? "What makes you different from other agencies?"}
        </p>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          <CustomIcon classNames={showAnswer ? "rotate-90" : ""} />
        </button>
      </div>
      {showAnswer && (
        <div className="flex flex-row items-center justify-between p-6 my-6 shadow-2xl w-full cursor-pointer">
          <p>
            {answer ??
              "We’re not just coders—we’re strategic partners. Unlike many agencies, we focus on scalable, maintainable solutions tailored to your goals, with clear communication, fast iterations, and a deep understanding of your business needs."}
          </p>
        </div>
      )}
    </>
  );
}
