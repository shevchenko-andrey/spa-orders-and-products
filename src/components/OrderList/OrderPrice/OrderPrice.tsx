import { IPrice } from "@/common/interfaces/product.interfaces";

interface OrderPriceProps {
  prices: IPrice[];
  defaultPrice?: IPrice;
}

export const OrderPrice: React.FC<OrderPriceProps> = ({ prices, defaultPrice }) => {
  return (
    <div className="flex flex-col">
      <ul>
        {prices.map(({ symbol, value }, index) => (
          <li key={index} className="text-secondary-dark text-xs">
            <span className="mr-1">{value}</span>
            <span>{symbol}</span>
          </li>
        ))}
      </ul>
      <p className="">
        {defaultPrice && (
          <>
            <span className="mr-1">{defaultPrice.value}</span>
            <span>{defaultPrice.symbol}</span>
          </>
        )}
      </p>
    </div>
  );
};
