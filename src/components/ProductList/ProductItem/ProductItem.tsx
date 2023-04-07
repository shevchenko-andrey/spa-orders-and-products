import { FC } from "react";
import { IProduct } from "@/common/interfaces/product.interfaces";
import Image from "next/image";
import { OrderPrice } from "@/components/OrderPrice";
import { RiDeleteBinLine } from "react-icons/ri";

interface IProductItemProps {
  product: IProduct;
}

export const ProductItem: FC<IProductItemProps> = ({ product }) => {
  const { isAvailable, isNew, order, date, type, prices } = product;

  const guaranteeStart = new Date(product.guarantee.start).toLocaleDateString();
  const guaranteeEnd = new Date(product.guarantee.end).toLocaleDateString();

  return (
    <li className="border bg-white border-gray-200 rounded-md overflow-hidden mb-3 :last-mb-0 relative shadow-sm">
      <div className="xl:flex">
        <div className="flex justify-center">
          <Image
            className="max-w-md xl:p-6 object-contain xl:w-20"
            src={product.photo}
            alt={`Product ${product.id}`}
            width={280}
            height={280}
          />
        </div>
        <div className="grid xl:grid-cols-9 xl:items-center xl:w-full w-10/12 gap-3 p-6">
          <div>
            <h2 className="text-lg xl:text-sm">{product.title}</h2>
            <p className="text-secondary-dark">{product.serialNumber}</p>
          </div>

          <p className="xl:text-center">
            {isAvailable ? <span className="text-primary">Available</span> : "Under renovation"}
          </p>

          <div className="">
            <p className="text-gray-700 text-base">{`from: ${guaranteeStart}`}</p>
            <p className="text-gray-700 text-base">{`to: ${guaranteeEnd}`}</p>
          </div>

          <p className="text-gray-700 text-base xl:text-center">{isNew ? "New" : "Used"}</p>

          <OrderPrice prices={prices} />
          <p>{type}</p>
          <p>{order.title}</p>

          <p className="text-gray-700 text-base">{`Date: ${date}`}</p>
          <div className="flex justify-end">
            <button className="p-3 xl:static absolute bottom-5 right-5 group">
              <RiDeleteBinLine className="fill-secondary-dark group-hover:fill-red-600" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
