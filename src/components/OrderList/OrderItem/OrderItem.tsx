import { IOrder } from "@/interfaces/order.interfaces";
import { FaList } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { OrderPrice } from "../../OrderPrice";

export const OrderItem: React.FC<IOrder> = ({ title, date, productsCount, prices }) => {
  return (
    <li
      className={`group/order relative md:w-full xl:flex xl:items-center
       xl:mr-2 xl:last:mr-0 bg-white border first:mt-0
        border-secondary-dark p-4 mt-4 hover:drop-shadow-2xl cursor-pointer`}
    >
      <div className="flex items-center xl:w-1/2 mb-4 xl:mb-0">
        <div className="border p-2 border-secondary-dark group-hover/order:border-primary  rounded-full mb-2 xl:mb-0">
          <FaList size={16} className="fill-slate-700 group-hover/order:fill-primary w-4" />
        </div>

        <h3 className="text-secondary-dark group-hover/order:text-primary underline ml-3 px-2">
          {title}
        </h3>
      </div>

      <div className="grid gap-3 xl:gap-8 xl:w-1/2 xl:items-center xl:grid-cols-3">
        <p>Products: {productsCount}</p>
        <p>{date.toLocaleString()}</p>
        <OrderPrice prices={prices} />
      </div>
      <div className="flex justify-end">
        <button className="p-3 xl:static absolute bottom-1 right-1 group">
          <RiDeleteBinLine className="fill-secondary-dark group-hover:fill-red-600" />
        </button>
      </div>
    </li>
  );
};
