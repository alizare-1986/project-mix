import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ShopCartState } from "../../type/type.product";

const initialState: ShopCartState = {
  items: [],
  itemscounter: 0,
  total: 0,
  checkout: false,
};

const shopCartSlice = createSlice({
  name: "shopcart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.itemscounter = state.items.reduce(
        (total, product) => total + product.quantity,
        0
      );
      state.total = state.items.reduce(
        (total, product: any) => total + product.price * product.quantity,
        0
      );
    },
    removeItem: (state, action: PayloadAction<any>) => {
      let newIt = state.items.filter((item) => item.id !== action.payload.id);
      state.items = [...newIt];
      state.itemscounter = state.items.reduce(
        (total, product) => total + product.quantity,
        0
      );
      state.total = state.items.reduce(
        (total, product: any) => total + product.price * product.quantity,
        0
      );
    },
    increase: (state, action: PayloadAction<any>) => {
      const itemI = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[itemI].quantity++;
      state.itemscounter = state.items.reduce(
        (total, product) => total + product.quantity,
        0
      );
      state.total = state.items.reduce(
        (total, product: any) => total + product.price * product.quantity,
        0
      );
    },
    decrease: (state, action: PayloadAction<any>) => {
      const itemD = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[itemD].quantity--;
      state.itemscounter = state.items.reduce(
        (total, product) => total + product.quantity,
        0
      );
      state.total = state.items.reduce(
        (total, product: any) => total + product.price * product.quantity,
        0
      );
    },
    clear: (state) => {
      state.items = [];
      state.total = 0;
      state.itemscounter = 0;
      state.checkout = false;
    },
    checkout: (state) => {
      state.items = [];
      state.total = 0;
      state.itemscounter = 0;
      state.checkout = true;
    },
  },
});
export const { addItem, removeItem, increase, decrease, clear ,checkout} =
  shopCartSlice.actions;
export default shopCartSlice.reducer;
