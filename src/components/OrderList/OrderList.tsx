import { IOrder } from "@/interfaces/order.interfaces";
import { OrderItem } from "./OrderItem";

interface OrdersProps {
  orders: IOrder[];
}

export const OrderList: React.FC<OrdersProps> = ({ orders }) => {
  return (
    <ul>
      {orders.map(({ id, date, description, title, productsCount, prices }) => (
        <OrderItem
          key={id}
          id={id}
          date={date}
          description={description}
          title={title}
          productsCount={productsCount}
          prices={prices}
        />
      ))}
    </ul>
  );
};
