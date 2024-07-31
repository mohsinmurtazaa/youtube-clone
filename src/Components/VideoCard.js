import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info || {};
  const { thumbnails, channelTitle, title } = snippet || {};
  return (
    <div className="m-2 p-2 ">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};
export const AdVideoCard = (Component) => {
  return (props) => (
    <div className="p-1 m-1 border border-red-900">
      <Component {...props} />
    </div>
  );
};

export default VideoCard;
