import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="w-[540px] flex items-center bg-[rgba(255,255,255,0.15)] rounded-[20px]">
      <label className="left-0 text-primary-text pl-3">
        <BsSearch className="w-5 h-5" />
      </label>
      <input
        type="text"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        className="outline-none bg-transparent w-full py-2 pl-4 text-primary-text placeholder:text-[rgba(255,255,255,0.8)]"
      />
    </div>
  );
};

export default Search;
