import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { pageState, showCartState } from "../atoms";
const SideBar: React.FC = () => {
  const [page, setPage] = useRecoilState(pageState);
  const [showCart, setShowCart] = useRecoilState(showCartState);
  return (
    <div className="fixed col-span-1">
      <div className="flex flex-col w-[62px] justify-between items-center h-screen py-8 bg-white ">
        {/* Logo */}
        <div className="relative  h-11 w-11 ">
          <Image
            priority
            src="/logo.svg"
            alt="Logo"
            layout="fill" // required
            objectFit="cover" // change as you like
            className="rounded-full" // you can use other classes here too
          />
        </div>

        {/* Icon List */}
        <div className="flex flex-col justify-between mt-6">
          <nav>
            {/* List Icon */}
            <a
              className="flex items-center p-2 mb-[4.5rem] text-gray-700 justify-center"
              href="#"
              onClick={() => {
                setPage("home");
              }}
            >
              {page === "home" && (
                <div className="w-2 h-11 bg-[#f9a109] absolute left-0 rounded-r-md" />
              )}
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M3.71,16.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,3.71,16.29ZM7,8H21a1,1,0,0,0,0-2H7A1,1,0,0,0,7,8ZM3.71,11.29a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,3.71,11.29ZM21,11H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.09-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1.15,1.15,0,0,0,3.71,6.29ZM21,16H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* History icon ? */}
            <a
              className="flex items-center p-2 mb-[4.5rem] text-gray-700 justify-center"
              href="#"
              onClick={() => {
                setPage("history");
              }}
            >
              {page === "history" && (
                <div className="w-2 h-11 bg-[#f9a109] absolute left-0 rounded-r-md" />
              )}
              <svg
                className="w-8 h-8 rotate-[45deg]"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.62a1,1,0,0,0,0-2H6.22A8,8,0,1,1,4,12a1,1,0,0,0-2,0A10,10,0,1,0,12,2Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Stats Icon */}
            <a
              className="flex justify-center items-center p-2 my-3 text-gray-700"
              href="#"
              onClick={() => {
                setPage("stats");
              }}
            >
              {page === "stats" && (
                <div className="w-2 h-11 bg-[#f9a109] absolute left-0 rounded-r-md" />
              )}
              <svg
                className="w-8 h-8 "
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6ZM7,12a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V13A1,1,0,0,0,7,12Zm10-2a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,17,10Zm2-8H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </nav>
        </div>
        {/* Shopping Cart Icon */}
        <a
          className="flex items-center p-2 text-gray-700 rounded-full bg-[#f9a109]"
          href="#"
          onClick={() => {
            setShowCart(!showCart);
          }}
        >
          <svg
            className="w-8 h-8 "
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path
              d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"
              stroke="white"
              strokeWidth="0"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
