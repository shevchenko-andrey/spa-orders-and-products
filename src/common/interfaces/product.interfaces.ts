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
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: IGuarantee;
  price: IPrice[];
  order: number;
  date: string;
}
