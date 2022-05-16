import React from "react";
import Card from "../card";
import SearchBar from "../searchBar";

function List() {
  const [search, setSearch] = React.useState("");
  return (
    <div className="min-h-screen bg-gray-100 px-3 pt-10 font-quicksand">
      <SearchBar placeholder="search item" setSearch={setSearch} />
      <div className="pb-7 pl-2" id="one piece">
        <div className="text-black text-lg mb-4">Fruit and vegetables</div>
        <div className="grid grid-cols-2 gap-y-6 gap-x-16 lg:grid-cols-4 lg:gap-x-0 w-4/5">
          <Card title="Avocado" />
          <Card title="Banana" />
          <Card title="Pre-cooked corn 450g" />
          <Card title="Mandarin Nadorcott" />
          <Card title="Avocado" />
          <Card title="Banana" />
          <Card title="Pre-cooked corn 450g" />
          <Card title="Mandarin Nadorcott" />
        </div>
      </div>
    </div>
  );
}

export default List;
