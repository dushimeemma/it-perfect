"use client";

import SubTitle from "@/app/components/reusable/SubTitle";
import Title from "@/app/components/reusable/Title";
import { faqs } from "@/app/helpers/stub-data/faqs";
import Question from "@/app/components/reusable/Question";

export default function Faq() {
  return (
    <div id="faq" className="flex w-[94vw] flex-col items-center p-6 mt-6">
      <Title title="FAQ" />
      <SubTitle text="Answers that you are looking for" />
      <div className="w-full my-6 gap-4">
        {faqs.map((faq) => (
          <Question key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
