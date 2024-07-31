import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/Slices/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleSideBar = () => {
    dispatch(toggleMenu());
  };
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
          className="w-1/2  p-2 border border-gray-400 rounded-l-full"
        />
        <button className="py-2 px-5 border border-gray-400 rounded-r-full bg-gray-100">
          🔍
        </button>
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
