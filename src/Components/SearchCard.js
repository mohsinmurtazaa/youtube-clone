import React from "react";

const SearchCard = ({ data }) => {
  console.log("data", data);
  const { snippet } = data || {};
  const { thumbnails, channelTitle, title, description } = snippet || {};

  return (
    <div>
      <div>
        <div className="m-2 p-2 flex">
          <img
            className="rounded-lg"
            alt="thumbnail"
            src={thumbnails?.high?.url}
          />
          <div className="px-2">
            <p className="font-bold py-2">{title}</p>
            <p className="">{channelTitle}</p>
            <p className="py-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
