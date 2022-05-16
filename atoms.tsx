import { atom } from "recoil";

export const pageState = atom({
  key: "pageState",
  default: "home",
});

export const amountState = atom({
  key: "amountState",
  default: false,
});

export const amountCartItemState = atom({
  key: "amountCartItemState",
  default: 0,
});

export const isAddingState = atom({
  key: "isAddingState",
  default: false,
});

export const showCartState = atom({
  key: "showCartState",
  default: false,
});

export interface ICartItem {
  name: string;
  amount: number;
  note?: string;
  imageUrl?: string;
  category: string;
}

export const cartItemState = atom({
  key: "cartItemState",
  default: [] as ICartItem[],
});
