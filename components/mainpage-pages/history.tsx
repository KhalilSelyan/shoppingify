import React from "react";
import HistoryCard from "../historycard";

function History() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 pt-10 font-quicksand flex flex-col ">
      <span className="font-semibold text-xl">Shopping History</span>
      {/* Monthly History */}
      <div className="flex flex-col mt-8 lg:ml-12 justify-center">
        <div className="text-xl text-black mb-10 font-bold self-start">
          April 2022
        </div>
        <HistoryCard />
        <HistoryCard />
      </div>
      <div className="flex flex-col mt-8 lg:ml-12 justify-center">
        <div className="text-xl text-black mb-10 font-bold self-start">
          May 2022
        </div>
        <HistoryCard />
        <HistoryCard />
      </div>
    </div>
  );
}

export default History;
