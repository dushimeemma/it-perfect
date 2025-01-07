"use client";

import ReactPlayer from "react-player";
import { VIDEO_URL } from "@/app/helpers/constants";
import { VIDEO_STYLES } from "@/app/helpers/styles";
import { VIDEO_CONFIGS } from "@/app/helpers/configs";

export default function VideoPage() {
  return (
    <div
      id="home"
      className="h-[40vh] lg:h-[60vh] w-[94vw] lg:w-[80vw] flex items-center relative  rounded-[1.25rem] justify-center my-6"
    >
      <ReactPlayer
        url={VIDEO_URL}
        width="100%"
        height="100%"
        controls={true}
        style={VIDEO_STYLES}
        config={VIDEO_CONFIGS}
      />
    </div>
  );
}
