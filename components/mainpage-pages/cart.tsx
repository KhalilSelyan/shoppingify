import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import {
  pageState,
  cartItemState,
  ICartItem,
  isAddingState,
} from "../../atoms";

import { supabase } from "../../supabaseClient";
import CartItem from "../cartItem";

// const handleItemRender = async () => {
//   let { data, error } = await supabase.from("items").select("*");
//   if (error) {
//     console.log(error);
//   }

//   if (data) {
//     return data;
//   }
// };

function Cart() {
  const [page, setPage] = useRecoilState(pageState);
  const [cartItem, setCartItem] = useRecoilState(cartItemState);
  const [isAdding, setIsAdding] = useRecoilState(isAddingState);

  return (
    <div className="min-h-screen bg-[#FFF0DE]  pt-10 font-quicksand flex flex-col justify-between">
      {/* Card */}
      <div className="px-3">
        <div className="py-4 w-72 h-32 mx-auto bg-[#80485B] rounded-3xl shadow-lg ">
          <div className="flex justify-start -mt-16 md:justify-end">
            <div className="relative h-32 w-32 mt-6">
              <Image
                className=""
                alt="Bottle"
                src="/source.svg"
                layout="fill"
              />
            </div>
            <div className="mt-16">
              <div className="font-bold text-white">
                Didn’t find what you need?
              </div>
              <button
                onClick={() => {
                  setIsAdding(true);
                }}
                className="w-28 h-9 flex items-center justify-center bg-white rounded-xl mt-3 text-sm font-bold"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
        {/* List */}
        <div className="flex flex-col mt-8">
          <div className="text-2xl text-black mb-10 font-bold">
            Shopping List
          </div>
          <div className="font-medium text-sm text-[#828282] mb-6">
            Meat And Fish
          </div>
          <div>
            {cartItem.map((item) => (
              <CartItem item={item} key={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Shopping List Name Input */}
      <div className="flex w-full h-24 bg-white items-center justify-center">
        <div className="w-72 h-16 flex justify-between pl-2 ml-1 border-2 border-[#f9a109] rounded-xl">
          <input
            type="text"
            className="border-none outline-none"
            placeholder="Enter shopping list name"
          />
          <button className="w-[5.5rem] bg-[#f9a109] rounded-lg -mt-[2px] text-white font-bold">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
