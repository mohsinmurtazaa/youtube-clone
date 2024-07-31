import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/Constans";
import VideoCard, { AdVideoCard } from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEO_API);
      if (!response.ok) {
        throw new Error(`Error Status ${response.status}`);
      }
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.log(error);
    }
  };
  const Card = AdVideoCard(VideoCard);

  return (
    <div className="flex flex-wrap">
      {videos && <Card info={videos[videos.length - 1]} />}
      {videos &&
        videos.map((video) => (
          <Link
            key={video.id}
            to={"/watch?v=" + video.id}
            className="m-2 p-2 shadow-lg flex-grow flex-shrink-0"
            style={{
              flexBasis: "calc(33.333% - 1rem)",
              boxSizing: "border-box",
            }}
          >
            <VideoCard id={video.id} info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
