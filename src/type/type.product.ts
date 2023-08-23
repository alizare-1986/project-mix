import { Omit } from "@reduxjs/toolkit/dist/tsHelpers";

export interface Product {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
  quantity:number
  // other product properties
}
export interface ShopCartItems {
  id: number;
  image:string
  name: string;
  price: number;
  quantity: number;

}

export interface ShopCartState {
  items: ShopCartItems[];
  itemscounter: number;
  total: number;
  checkout: boolean;
 
}


export interface ShopState {
  products: Product[];
  product: Product;
  loading: boolean;
  error: null | string;
}

export type IPropsProduct = Omit<ShopState, "product">;
export type IPropsProducts = Omit<ShopState, "products" | "loading" | "error">;
export type IShopState = Omit<ShopState, "product">;
