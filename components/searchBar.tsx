import Image from "next/image";
import React from "react";
import searchIcon from "../public/search.svg";
interface Props {
  placeholder: string;
  setSearch: any;
}

const SearchBar: React.FC<Props> = ({ placeholder, setSearch }) => {
  return (
    <div className="pt-4 pb-2">
      <div className="lg:w-96 w-56 bg-white border  rounded-xl flex items-center justify-between px-2 lg:px-4">
        <input
          type="text"
          className={`lg:ml-2 p-3 text-gray-700  placeholder:text-gray-800"
          text-xs  focus:outline-none 
            `}
          placeholder={placeholder}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <Image
          src={searchIcon}
          className="h-4 w-4 text-gray-800"
          alt="searchicon"
        />
      </div>
    </div>
  );
};

export default SearchBar;
