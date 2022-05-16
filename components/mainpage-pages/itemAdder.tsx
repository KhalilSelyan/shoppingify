import { XIcon } from "@heroicons/react/solid";
import { supabase } from "../../supabaseClient";
import React from "react";
import { useRecoilState } from "recoil";
import { cartItemState, isAddingState, pageState } from "../../atoms";
import { ICartItem } from "../../atoms";
let categorySuggestion = [
  "Beverages",
  "Meat and Fish",
  "Fruits and Vegetables",
  "Dairy",
];

let item: ICartItem = {
  name: "",
  amount: 0,
  note: "",
  imageUrl: "",
  category: "",
};

const handleItemAdd = async () => {
  const { data, error } = await supabase.from("items").insert([
    {
      id: Math.floor(Math.random() * 1000000),
      name: item.name,
      amount: item.amount,
      note: item.note,
      imageUrl: item.imageUrl,
      category: item.category,
    },
  ]);
  console.log(error);
};

function ItemAdder() {
  const [page, setPage] = useRecoilState(pageState);
  const [isAdding, setIsAdding] = useRecoilState(isAddingState);
  const [cartItem, setCartItem] = useRecoilState(cartItemState);
  const [activeSuggest, setActiveSuggest] = React.useState(false);
  // create a ref  to store the textInput DOM element
  const textInput = React.useRef<HTMLInputElement>(null);
  return (
    <div className="min-h-screen bg-gray-100 pl-2 pt-10 font-quicksand flex flex-col justify-between pb-4">
      <div className="flex flex-col justify-center items-center">
        <span className="font-bold text-2xl mb-7 self-start">
          Add a new Item
        </span>
        <div className="mb-6">
          <span className="font-medium text-sm">Name</span>
          <div className="w-72 h-12 rounded-xl bg-white flex items-center px-2">
            <input
              type="text"
              placeholder={`Enter a name`}
              className="bg-transparent outline-none pl-2 placeholder:text-[#bdbdbd] text-sm font-medium flex-1"
              onChange={(e) => {
                item.name = e.target.value;
              }}
            />
          </div>
        </div>
        <div className="mb-6">
          <span className="font-medium text-sm">Note(Optional)</span>
          <div className="w-72 h-24 rounded-xl bg-white flex items-start">
            <input
              type="text"
              placeholder="Enter a note"
              className="bg-transparent outline-none pl-2 py-2 placeholder:text-[#bdbdbd] text-sm font-medium"
              onChange={(e) => {
                item.note = e.target.value;
              }}
            />
          </div>
        </div>
        <div className="mb-6">
          <span className="font-medium text-sm">Image Url (Optional)</span>
          <div className="w-72 h-12 rounded-xl bg-white flex items-center px-2">
            <input
              type="text"
              placeholder={`Enter a Image Url`}
              className="bg-transparent outline-none pl-2 placeholder:text-[#bdbdbd] text-sm font-medium flex-1"
              onChange={(e) => {
                item.imageUrl = e.target.value;
              }}
            />
          </div>
        </div>
        <div className="mb-6">
          <span className="font-medium text-sm">Category</span>
          <div className="w-72 h-12 rounded-xl bg-white flex items-center px-2">
            <input
              ref={textInput}
              type="text"
              placeholder={`Enter a Category`}
              className="bg-transparent outline-none pl-2 placeholder:text-[#bdbdbd] text-sm font-medium flex-1"
              onChange={(e) => {
                setActiveSuggest(e.target.value.length > 0);
              }}
            />
            <XIcon
              onClick={() => {
                if (textInput.current) {
                  textInput.current.value = "";
                }
                setActiveSuggest(false);
              }}
              className="h-5 w-5"
            />
          </div>
          {activeSuggest && (
            <div
              className={`${
                activeSuggest ? "block" : "hidden"
              } w-72 h-40 bg-white border border-gray-300 mt-2 rounded-xl overflow-y-scroll`}
            >
              {categorySuggestion.map((suggestion: string) => (
                <div
                  className="flex items-center mx-4 my-1 px-2 py-1 hover:bg-[#bdbdbd] group rounded-xl"
                  key={suggestion}
                  onClick={() => {
                    item.category = suggestion;
                    if (textInput.current) {
                      textInput.current.value = suggestion;
                    }
                  }}
                >
                  <span className="text-sm font-medium pl-2 text-[#bdbdbd] group-hover:text-black">
                    {suggestion}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col-reverse justify-center items-center">
        <button
          onClick={async () => {
            await handleItemAdd();
          }}
          className="w-72 h-9 flex items-center justify-center bg-[#F9A109] rounded-xl mt-3 text-sm font-bold text-white"
        >
          Save
        </button>
        <button
          onClick={() => {
            setIsAdding(false);
          }}
          className="w-72 h-9 flex items-center justify-center bg-white rounded-xl mt-3 text-sm font-bold"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ItemAdder;
