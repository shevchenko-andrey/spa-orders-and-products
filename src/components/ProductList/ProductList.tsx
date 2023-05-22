import { IProduct } from "@/interfaces";
import { FC } from "react";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: IProduct[];
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(({ title, id, photo, prices }) => (
        <li key={id}>
          <ProductCard id={id} title={title} photo={photo} prices={prices} />
        </li>
      ))}
    </ul>
  );
};
