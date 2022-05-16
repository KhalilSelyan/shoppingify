import React from "react";

interface Props {
  title: string;
}

function Card(props: Props) {
  return (
    <div>
      <div className="flex w-36 bg-white rounded-xl shadow-lg">
        <div className="flex items-center w-3/4 p-4 text-sm">{props.title}</div>

        <div className="flex items-center w-1/4 cursor-pointer">
          <svg
            className="w-5 h-5 rotate-45 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Card;
