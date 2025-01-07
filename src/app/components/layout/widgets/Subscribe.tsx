"use client";

import { useState, useEffect } from "react";

import Title from "@/app/components/reusable/Title";
import SubTitle from "@/app/components/reusable/SubTitle";
import Button from "@/app/components/reusable/Button";

export default function Subscribe() {
  const [loading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubscribe = () => {
    if (!email || email === "") {
      setShowError(true);
      return;
    } else {
      setShowError(false);
      setIsLoading(true);
      setTimeout(() => {
        setMessage(
          "Subscribed successfully...\n\n You will receive our daily news through your email!"
        );
        setIsLoading(false);
        setEmail("");
      }, 3000);
    }
  };

  useEffect(() => {
    if (message != "") {
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }, [message]);

  return (
    <div className=" flex w-[94vw] flex-col items-center justify-center p-6 gap-4">
      <Title title="Are you ready to start your project?" />
      <SubTitle text="Let’s discuss about your amazing idea." />
      <span className="font-light text-sm">
        Don&apos;t worry, it is secure and confidential.
      </span>
      {message != "" && (
        <div className="flex flex-row items-center justify-between p-6 my-6 shadow-2xl w-full sm:w-1/3  cursor-pointer">
          <p className="text-primary">{message}</p>
        </div>
      )}
      <div className="flex flex-row my-6 gap-4 w-full md:w-1/2">
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className={`py-4 px-3 lg:px-12 rounded-[1.563rem]  w-2/3 shadow-2xl outline-none placeholder:text-primary text-primary ${showError && "border-2 border-red-200"}`}
        />
        <Button className="w-1/3 rounded-[1.563rem]" onClick={handleSubscribe}>
          {loading ? "Loading..." : "Subscribe"}
        </Button>
      </div>
    </div>
  );
}
