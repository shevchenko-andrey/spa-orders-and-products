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
  isAvailable: boolean;
  photo: string;
  title: string;
  price: number;
  shortDescription: string;
}

export interface IProductResponse {
  products: IProduct[];
  totalPages: number;
  count: number;
  currentPage: number;
}

export interface IProductResponse {
  products: IProduct[];
  totalPages: number;
  count: number;
  currentPage: number;
}
