import React from "react";
import Chart from "../lineChart";
import PercentageBar from "../percentageBar";

function Stats() {
  return (
    <div className="min-h-screen bg-gray-100 px-3 pt-10 font-quicksand">
      <div className="font-medium text-xl">Top Items</div>
      <div className="my-8">
        <div className="flex space-x-2">
          <span>Banana</span>
          <span>12%</span>
        </div>
        <PercentageBar classname={`w-[12%]`} />
      </div>
      <div className="my-8">
        <div className="flex space-x-2">
          <span>Rice</span>
          <span>10%</span>
        </div>
        <PercentageBar classname={`w-[10%]`} />
      </div>
      <div className="my-8">
        <div className="flex space-x-2">
          <span>Chicken 1kg</span>
          <span>8%</span>
        </div>
        <PercentageBar classname={`w-[8%]`} />
      </div>

      <div>
        <span>Monthly Summary</span>
        <Chart />
      </div>
      <div className="font-medium text-xl">Top Items</div>
      <div className="my-8">
        <div className="flex space-x-2">
          <span>Banana</span>
          <span>12%</span>
        </div>
        <PercentageBar classname={`w-[12%]`} />
      </div>
      <div className="my-8">
        <div className="flex space-x-2">
          <span>Rice</span>
          <span>10%</span>
        </div>
        <PercentageBar classname={`w-[10%]`} />
      </div>
      <div className="my-8">
        <div className="flex space-x-2">
          <span>Chicken 1kg</span>
          <span>8%</span>
        </div>
        <PercentageBar classname={`w-[8%]`} />
      </div>

      <div>
        <span>Monthly Summary</span>
        <Chart />
      </div>
      <div className="font-medium text-xl">Top Items</div>
      <div className="my-8">
        <div className="flex space-x-2">
          <span>Banana</span>
          <span>12%</span>
        </div>
        <PercentageBar classname={`w-[12%]`} />
      </div>
      <div className="my-8">
        <div className="flex space-x-2">
          <span>Rice</span>
          <span>10%</span>
        </div>
        <PercentageBar classname={`w-[10%]`} />
      </div>
      <div className="my-8">
        <div className="flex space-x-2">
          <span>Chicken 1kg</span>
          <span>8%</span>
        </div>
        <PercentageBar classname={`w-[8%]`} />
      </div>

      <div>
        <span>Monthly Summary</span>
        <Chart />
      </div>
    </div>
  );
}

export default Stats;
