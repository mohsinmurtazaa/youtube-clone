import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { GOOGLE_API_KEY } from "../utils/Constans";
const CommentsList = ({ videoId }) => {
  const [videoComments, setVideoComments] = useState([]);

  const getComments = async () => {
    try {
      console.log("id", videoId);
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/commentThreads?key=" +
          GOOGLE_API_KEY +
          "&videoId=" +
          videoId +
          "&part=snippet,replies&maxResults=100"
      );
      if (!response.ok) {
        throw new Error(`Error Status : ${response.status}`);
      }
      const data = await response.json();
      setVideoComments(data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getComments();
  }, []);
  return (
    <div>
      {videoComments && videoComments.length > 0 ? (
        videoComments.map((comment) => (
          <div key={comment.id}>
            <Comment comment={comment?.snippet?.topLevelComment?.snippet} />
            {/* <div className="pl-4 border border-l-black ml-5">
            <CommentsList commentsData={comment.replies} />
          </div> */}
          </div>
        ))
      ) : (
        <p className="m-2 p-4 bg-gray-100 shadow-lg ">
          No Comments found.Comments are disabled for this video.
        </p>
      )}
    </div>
  );
};

export default CommentsList;
