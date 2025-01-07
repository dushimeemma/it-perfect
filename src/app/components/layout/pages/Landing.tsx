"use client";

import Image from "next/image";

import TextBadge from "@/app/components/reusable/TextBadge";
import Button from "@/app/components/reusable/Button";
import SeeMore from "@/app/components/reusable/SeeMore";

export default function Landing() {
  const handleNavigate = (link?: string) => {
    window.open(link, "_blank");
  };

  return (
    <div
      id="home"
      className="h-screen w-[94vw] flex flex-col lg:flex-row justify-between items-start py-6 mt-12 lg:mt-6"
    >
      <div className="my-auto m-6 h-[60vh] flex-1 flex flex-col items-start justify-around gap-1 lg:gap-4">
        <p className="text-6xl font-bold">
          Where <span className="text-primary">Technology</span> Meets
          Ingenuity.
        </p>
        <span className="font-light text-3xl">
          We do not just code, we conquer. Your one stop service center to
          manage your businesses and needs.
        </span>
        <div className="flex gap-4 w-full lg:w-[40vw]">
          <TextBadge label="successful projects" count={32} />
          <TextBadge label="satisfied clients" count={22} />
        </div>
        <div className="flex  items-center  w-full lg:w-[40vw]">
          <div className="w-[11.688rem]">
            <Button
              className="rounded-[1.875rem]"
              onClick={() =>
                handleNavigate("https://calendly.com/ajrutaha/30min")
              }
            >
              Book a free call
            </Button>
          </div>
          <SeeMore
            classNames="ml-6"
            onClick={() => handleNavigate("#projects")}
          />
        </div>
      </div>
      <div className="hidden lg:flex w-[50vw] h-full m-6 cursor-pointer">
        <Image
          width={500}
          height={500}
          src="/landing.png"
          layout="responsive"
          alt="Landing Image"
        />
      </div>
    </div>
  );
}
