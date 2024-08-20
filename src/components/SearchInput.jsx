import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event?.key === "Enter" && searchQuery?.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <div
      id="searchBox"
      className="h-12 w-full md:w-[584px] flex items-center gap-2 md:gap-3 px-3 md:px-4 border border-[#dfe1e5] rounded-full hover:bg-white hover:shadow-md hover:border-transparent focus-within:shadow-md focus-within:border-transparent"
    >
      <AiOutlineSearch size={20} color="#9aa0a6" />
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        className="flex-1 outline-none text-black/[0.87] text-sm md:text-base placeholder-gray-500"
        placeholder="Search..."
      />
      <div className="flex items-center gap-2 md:gap-3">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#70757a"
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
        <img
          className="h-6 w-6 md:h-5 md:w-5 cursor-pointer"
          src={MicIcon}
          alt="Mic Icon"
        />
        <img
          className="h-6 w-6 md:h-5 md:w-5 cursor-pointer"
          src={ImageIcon}
          alt="Image Icon"
        />
      </div>
    </div>
  );
};

export default SearchInput;
