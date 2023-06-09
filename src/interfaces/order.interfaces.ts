import { IPrice } from "./product.interfaces";

export interface IOrder {
  id: number;
  title: string;
  date: Date;
  description: string;
  productsCount: number;
  prices: IPrice[];
}

export interface IOrderInfo {
  id: number;
  title: string;
  date: Date;
  description: string;
}
