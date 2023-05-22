import { IPrice } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { FC, useMemo } from "react";

interface ProductCardProps {
  id: number;
  title: string;
  photo: string;
  prices: IPrice[];
}

export const ProductCard: FC<ProductCardProps> = ({ id, photo, prices, title }) => {
  const defaultPrice = useMemo(
    () => prices.find((price) => price.isDefault) ?? prices[0],
    [prices]
  );

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div>
        <Image src={photo} alt={title} width={500} height={500} className="w-full h-full" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-700">Price:</p>
          <p className="font-semibold">
            <span>{defaultPrice.symbol}</span>
            <span>{defaultPrice.value}</span>
          </p>
          <Link href={`/product/${id}`}>See more</Link>
        </div>
      </div>
    </div>
  );
};
