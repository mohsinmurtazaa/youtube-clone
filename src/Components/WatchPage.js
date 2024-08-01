import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/Constans";
import { closeMenu } from "../utils/Slices/appSlice";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [videoComments, setVideoComments] = useState([]);
  const [params] = useSearchParams();
  const dispatch = useDispatch();

  const getComments = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/commentThreads?key=" +
          GOOGLE_API_KEY +
          "&videoId=" +
          params.get("v") +
          "&part=snippet,replies&maxResults=100"
      );
      if (!response.ok) {
        throw new Error(`Error Status : ${response.status}`);
      }
      const data = await response.json();
      console.log("items", data);
      setVideoComments(data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getComments();
  }, []);
  return (
    <div className="flex flex-col">
      <div className="px-5 py-4 ">
        <iframe
          width="1000"
          height="500"
          src={
            "https://www.youtube.com/embed/" +
            params.get("v") +
            "?si=J-OZ6BXokTXLQgsH"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer comments={videoComments} />
    </div>
  );
};

export default WatchPage;
