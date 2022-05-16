import React from "react";

interface Props {
  classname?: string;
}

function PercentageBar(props: Props) {
  return (
    <div>
      <div className="w-56 my-2 bg-gray-200 rounded-full h-2.5">
        <div
          className={`bg-[#f9a109] h-2.5 rounded-full ${props.classname}`}
        ></div>
      </div>
    </div>
  );
}

export default PercentageBar;
