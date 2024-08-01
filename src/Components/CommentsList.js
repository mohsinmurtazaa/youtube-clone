import React from "react";
import Comment from "./Comment";

const CommentsList = ({ commentsData }) => {
  console.log(commentsData);
  return (
    <div>
      {commentsData &&
        commentsData.map((comment) => (
          <div key={comment.id}>
            <Comment comment={comment?.snippet?.topLevelComment?.snippet} />
            {/* <div className="pl-4 border border-l-black ml-5">
            <CommentsList commentsData={comment.replies} />
          </div> */}
          </div>
        ))}
    </div>
  );
};

export default CommentsList;
