import { IProduct } from "@/interfaces";
import { FC } from "react";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: IProduct[];
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(({ title, id, photo, isAvailable, price, shortDescription }) => (
        <li key={id}>
          <ProductCard
            id={id}
            title={title}
            photo={photo}
            price={price}
            shortDescription={shortDescription}
            isAvailable={isAvailable}
          />
        </li>
      ))}
    </ul>
  );
};
