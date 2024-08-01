import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/Constans";
import { toggleMenu } from "../utils/Slices/appSlice";
import { cacheResult } from "../utils/Slices/searchSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSugeestion] = useState(false);
  const cacheSearch = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const toggleSideBar = () => {
    dispatch(toggleMenu());
  };
  const getSuggestions = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchText);
      if (!response.ok) {
        throw new Error(`Error Status : ${response.status}`);
      }
      const data = await response.json();
      setSuggestions(data[1]);
      dispatch(
        cacheResult({
          [searchText]: data[1],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!searchText) return;
    let timer = setTimeout(() => {
      if (cacheSearch[searchText]) {
        setSuggestions(cacheSearch[searchText]);
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <div className="grid p-2 grid-flow-col shadow ">
      <div className="flex col-span-1 ">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
          alt="menu"
          className="h-12 cursor-pointer"
          onClick={toggleSideBar}
        />
        <Link to="/">
          <img
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            alt="logo"
            className="h-14"
          />
        </Link>
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          name="searchText"
          placeholder="Search"
          value={searchText}
          className="w-1/2  p-2 border border-gray-400 rounded-l-full"
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setShowSugeestion(true)}
          onBlur={() =>
            setTimeout(() => {
              setShowSugeestion(false);
            }, 200)
          }
        />
        <button className="py-2 px-5 border border-gray-400 rounded-r-full bg-gray-100">
          🔍
        </button>
        {showSuggestion && (
          <div className="absolute bg-white py-2 px-5 rounded-lg shadow-lg w-1/3">
            <ul>
              {suggestions.map((s) => (
                <Link to={"/search-result/" + s}>
                  <li key={s} className="p-2 shadow-sm hover:bg-gray-200">
                    🔎 {s}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 ">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
          alt="user profile"
        />
      </div>
    </div>
  );
};
export default Header;
