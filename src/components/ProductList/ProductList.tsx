import { IProduct } from "@/interfaces/product.interfaces";
import { ProductItem } from "./ProductItem";

interface IProductListProps {
  products: IProduct[];
}

export const ProductList: React.FC<IProductListProps> = ({ products }) => {
  return (
    <ul>
      {products.map((product: IProduct) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
