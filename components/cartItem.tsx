import React from "react";
import { useRecoilState } from "recoil";
import { amountCartItemState, amountState } from "../atoms";

function CartItem(props: any) {
  const { name, amount, note, imageUrl, category } = props;
  const [amountBool, setAmountBool] = useRecoilState(amountState);
  return (
    <div>
      <div className="flex w-full justify-between items-center mb-10">
        <span className="font-medium text-sm">{name}</span>

        {!amountBool ? (
          <div
            className="w-16 h-8 rounded-3xl border border-[#f9a910] text-[#f9a910] flex justify-center items-center text-xs font-bold"
            onClick={() => {
              setAmountBool(true);
            }}
          >
            {amount} pcs
          </div>
        ) : (
          <div className="flex items-center justify-between w-44 h-11 bg-white rounded-xl">
            <div className="bg-[#f9a910] flex items-center justify-center h-full rounded-xl w-9">
              <svg
                className="w-8 h-8 p-1"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"
                  stroke="white"
                  strokeWidth="0.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <svg
              onClick={() => {
                // setAmount(amount - 1);
              }}
              className="w-8 h-8 p-1"
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              viewBox="0 0 24 24"
              fill="#f9a910"
            >
              <path
                d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"
                stroke="#f9a910"
                strokeWidth="0.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div
              className="w-16 h-8 rounded-3xl border border-[#f9a910] text-[#f9a910] flex justify-center items-center text-xs font-bold"
              onClick={() => {
                setAmountBool(false);
              }}
            >
              {amount} pcs
            </div>
            <svg
              onClick={() => {
                // setAmount(amount + 1);
              }}
              className="w-8 h-8 p-1"
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              viewBox="0 0 24 24"
              fill="#f9a910"
            >
              <path
                d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"
                stroke="#f9a910"
                strokeWidth="0.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartItem;
