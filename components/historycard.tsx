import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";

function HistoryCard() {
  return (
    <div className="flex items-center font-medium text-sm text-gray-600 mb-6 h-12 w-72 lg:w-4/5 lg:h-20 lg:p-4 p-2 rounded-lg shadow-lg  border-gray-500 border">
      <span className="flex-1">Grocery list card</span>
      <CalendarIcon className="ml-2 h-5 w-5" />
      <span className="text-xs text-gray-500">13/05</span>
      <div className="flex items-center h-7 w-18 text-xs border border-[#56CCF2] p-1 rounded-lg mx-2 text-[#56CCF2]">
        Completed
      </div>
      <ChevronRightIcon className="h-5 w-5 text-[#F9A109]" />
    </div>
  );
}

export default HistoryCard;
