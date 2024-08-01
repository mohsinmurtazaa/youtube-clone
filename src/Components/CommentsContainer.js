import React from "react";

import CommentsList from "./CommentsList";

const CommentsContainer = ({ videoId }) => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList videoId={videoId} />
    </div>
  );
};

export default CommentsContainer;
