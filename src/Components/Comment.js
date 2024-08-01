import React from "react";

const Comment = ({ comment }) => {
  const { authorProfileImageUrl, authorDisplayName, textOriginal } = comment;
  return (
    <div>
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img
          className="h-12 w-12"
          src={authorProfileImageUrl}
          alt="user-icon"
        />
        <div className="px-3">
          <p className="font-bold">{authorDisplayName}</p>
          <p>{textOriginal}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
