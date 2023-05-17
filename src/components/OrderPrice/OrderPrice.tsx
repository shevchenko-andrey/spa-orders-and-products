import { IPrice } from "@/interfaces/product.interfaces";

interface OrderPriceProps {
  prices: IPrice[];
}

export const OrderPrice: React.FC<OrderPriceProps> = ({ prices }) => {
  const defaultPrice = prices.find(({ isDefault }) => isDefault);
  const otherPrices = prices.filter(({ isDefault }) => !isDefault);

  return (
    <div className="flex flex-col">
      <ul>
        {otherPrices.map(({ symbol, value }, index) => (
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
