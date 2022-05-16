import { NextPage } from "next";
import React from "react";
import List from "../components/mainpage-pages/List";
import Cart from "../components/mainpage-pages/cart";
import { useRecoilValue } from "recoil";
import { isAddingState, pageState, showCartState } from "../atoms";
import Stats from "../components/mainpage-pages/stats";
import ItemAdder from "../components/mainpage-pages/itemAdder";
import History from "../components/mainpage-pages/history";

const MainPage: NextPage = () => {
  const page = useRecoilValue(pageState);
  const isAdding = useRecoilValue(isAddingState);
  const showCart = useRecoilValue(showCartState);
  return (
    <div className="flex flex-col lg:flex-row overflow-y-scroll col-span-7 min-h-screen ml-[62px]">
      <div className="lg:flex-1">
        {page === "home" && <List />}
        {page === "history" && <History />}
        {page === "stats" && <Stats />}
        {/* {page === "shop" && <Cart />}
  {page === "addItem" && <ItemAdder />} */}
      </div>

      {showCart ? (
        <div className="fixed right-0">
          {!isAdding ? <Cart /> : <ItemAdder />}
        </div>
      ) : null}
    </div>
  );
};

export default MainPage;
