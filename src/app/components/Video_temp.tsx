"use client";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

interface Props {
  url: string;
}

const Video = ({ url }: Props) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div>
      {hasWindow && (
        <ReactPlayer
          url={url}
          className="react-player"
          playing={false}
          loop
          controls={false}
        />
      )}
    </div>
  );
};

export default Video;
