import { IOrderInfo } from "./order.interfaces";
export interface IPrice {
  value: number;
  symbol: string;
  isDefault: number;
}

export interface IGuarantee {
  start: string;
  end: string;
}

export interface IProduct {
  id: number;
  serialNumber: number;
  isNew: number;
  isAvailable: number;
  order: IOrderInfo;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: IGuarantee;
  prices: IPrice[];
  date: string;
}

export interface IProductResponse {
  products: IProduct[];
  totalPages: number;
  count: number;
  currentPage: number;
}
