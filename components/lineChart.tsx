import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    items: 35,
  },
  {
    name: "February",
    items: 120,
  },
  {
    name: "March",
    items: 34,
  },
  {
    name: "April",
    items: 13,
  },
  {
    name: "May",
    items: 34,
  },
  {
    name: "June",
    items: 13,
  },
  {
    name: "July",
    items: 42,
  },
];

export default function Chart() {
  return (
    <div>
      <LineChart
        // className="w-80 h-52 lg:w-4/5"
        width={320}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="items" stroke="#f9a109" />
      </LineChart>
    </div>
  );
}
