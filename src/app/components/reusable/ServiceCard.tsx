import Image from "next/image";

// import { MouseEventHandler } from "react";

// import SeeMore from "./SeeMore";
import Title from "./Title";

interface ServiceCardProps {
  title: string;
  description?: string;
  image: string;
  // onSeeMore?: MouseEventHandler<HTMLButtonElement>;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  image,
  // onSeeMore,
  index = 1,
}: ServiceCardProps) {
  const isEven = index % 2 == 0;
  return (
    <div
      className={`flex ${
        isEven ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
      } justify-between items-center my-3`}
    >
      <div className="w-full lg:flex-1 cursor-pointer">
        <Image
          width={340}
          height={240}
          src={image}
          layout="responsive"
          alt="Web development Image"
          className="rounded-[1.25rem]"
        />
      </div>
      <div className={`flex-1 flex flex-col gap-4 mx-6`}>
        <Title title={title} />
        <p className="font-light text-2xl">{description}</p>
        {/* <SeeMore label="Read more" size={24} onClick={onSeeMore} /> */}
      </div>
    </div>
  );
}
