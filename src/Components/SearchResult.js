import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/Constans";
import SearchCard from "./SearchCard";
const SearchResult = () => {
  const [searchedResult, setSearchedResult] = useState([]);
  const params = useParams();
  const searchVideo = async () => {
    try {
      const response = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
          params.query +
          "&key=" +
          GOOGLE_API_KEY
      );
      if (!response.ok) {
        throw new Error(`Error Status: ${response.status}`);
      }
      const data = await response.json();
      setSearchedResult(data.items);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    searchVideo();
  }, [params]);

  return (
    <div>
      {searchedResult &&
        searchedResult.map((result) => (
          <Link key={result.id.videoId} to={"/watch?v=" + result.id.videoId}>
            <SearchCard key={result.id.videoId} data={result} />
          </Link>
        ))}
    </div>
  );
};

export default SearchResult;
