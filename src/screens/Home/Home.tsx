import { ProductList } from "@/components/ProductList";
import { IProductResponse } from "@/interfaces";
import { FC } from "react";

export const Home: FC<IProductResponse> = ({ products }) => {
  return (
    <section className="container mx-auto px-4">
      <ProductList products={products} />
    </section>
  );
};
