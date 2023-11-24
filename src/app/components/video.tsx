'use client';
import { useState, useEffect } from 'react';
import ReactPlayer from "react-player";

interface VideoSlnProps {
  url: string;
}

const VideoSln: React.FC<VideoSlnProps> = ({ url }) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <div>
      {hasWindow && <ReactPlayer url={url} className="react-player" playing loop width="100%" height={'300px'} controls={false}/>}
    </div>
  );
};


export default VideoSln