import { IProduct } from "@/common/interfaces/product.interfaces";
import { ProductList } from "@/components/ProductList";
import { GetServerSideProps } from "next";

interface IProductsProps {
  products: IProduct[];
}

const Products: React.FC<IProductsProps> = ({ products }) => {
  return (
    <div className="sm:mx-5 md:mx-10">
      <ProductList products={products} />
    </div>
  );
};
export default Products;

export const getServerSideProps: GetServerSideProps = async () => {
  const products = [
    {
      id: 1,
      serialNumber: 1234,
      isNew: 1,
      isAvailable: 1,
      photo: "/test-product.jpeg",
      title: "Product 1",
      type: "Monitors",
      specification: "Specification 1",
      order: {
        id: 1,
        title: "Order 1",
        date: "2017-06-29 12:09:33",
        description: "desc",
      },
      guarantee: {
        start: "2017-06-29 12:09:33",
        end: "2017-06-29 12:09:33",
      },
      prices: [
        { value: 100, symbol: "USD", isDefault: 0 },
        { value: 2600, symbol: "UAH", isDefault: 1 },
      ],
      date: "2017-06-29 12:09:33",
    },
    {
      id: 2,
      serialNumber: 1234,
      isNew: 1,
      isAvailable: 1,
      order: {
        id: 1,
        title: "Order 1",
        date: "2017-06-29 12:09:33",
        description: "desc",
      },
      photo: "/test-product.jpeg",
      title: "Product 1",
      type: "Monitors",
      specification: "Specification 1",
      guarantee: {
        start: "2017-06-29 12:09:33",
        end: "2017-06-29 12:09:33",
      },
      prices: [
        { value: 100, symbol: "USD", isDefault: 0 },
        { value: 2600, symbol: "UAH", isDefault: 1 },
      ],
      date: "2017-06-29 12:09:33",
    },
    {
      id: 3,
      serialNumber: 1234,
      isNew: 1,
      isAvailable: 1,
      order: {
        id: 1,
        title: "Order 1",
        date: "2017-06-29 12:09:33",
        description: "desc",
      },
      photo: "/test-product.jpeg",
      title: "Product 3",
      type: "Monitors",
      specification: "Specification 1",
      guarantee: {
        start: "2017-06-29 12:09:33",
        end: "2017-06-29 12:09:33",
      },
      prices: [
        { value: 100, symbol: "USD", isDefault: 0 },
        { value: 2600, symbol: "UAH", isDefault: 1 },
      ],
      date: "2017-06-29 12:09:33",
    },
  ];

  return {
    props: {
      products: products,
    },
  };
};
