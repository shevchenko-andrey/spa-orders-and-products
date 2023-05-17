import { OrderList } from "@/components/OrderList";
import { IOrder } from "@/interfaces/order.interfaces";
import { GetServerSideProps } from "next";
import { FC } from "react";
import { IoMdAdd } from "react-icons/io";

interface IOrderProps {
  orders: IOrder[];
}

export const Income: FC<IOrderProps> = ({ orders }) => {
  return (
    <div className="sm:mx-5 md:mx-10">
      <div className="flex items-center my-5 md:mt-0">
        <button className="flex items-center justify-center rounded-full w-10 h-10 bg-primary hover:bg-primary-dark hover:drop-shadow-xl">
          <IoMdAdd size={20} className="fill-white" />
        </button>
        <h2 className="text-4xl ml-4">Income</h2>
      </div>
      <OrderList orders={orders} />
    </div>
  );
};

export default Income;

export const getServerSideProps: GetServerSideProps = async () => {
  const orders = [
    {
      id: 1,
      title: "Order 1",
      date: "2017-06-29 12:09:33",
      description: "desc",
      productsCount: 5,
      prices: [
        {
          value: 100000,
          symbol: "$",
          isDefault: 0,
        },
        {
          value: 10000000,
          symbol: "UAH",
          isDefault: 1,
        },
      ],
    },
    {
      id: 2,
      title: "Order 2",
      date: "2017-06-29 12:09:33",
      description: "desc",
      productsCount: 15,
      prices: [
        {
          value: 10000,
          symbol: "$",
          isDefault: 1,
        },
      ],
    },
    {
      id: 3,
      title: "Order 3",
      date: "2017-06-29 12:09:33",
      description: "desc",
      productsCount: 25,
      prices: [
        {
          value: 10,
          symbol: "UAH",
          isDefault: 1,
        },
        {
          value: 100,
          symbol: "$",
          isDefault: 1,
        },
      ],
    },
  ];

  return { props: { orders } };
};
