import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IPrice } from "@/interfaces";
import { FC, useMemo } from "react";


interface ProductCardProps {
  id: number;
  title: string;
  photo: string;
  price: number;
  shortDescription: string;
  isAvailable: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  photo,
  title,
  price,
  shortDescription,
  isAvailable,
}) => {
  return (
    <article className="relative group/card p-4 bg-white rounded-lg shadow-lg">
      <Link
        className="block absolute top-0 left-0 cursor-pointer w-full h-full group/card"
        href={`/products/${id}`}
      />
      <div className="relative">
        <Image src={photo} alt={title} width={500} height={500} className="w-full h-full" />
        <button className="p-3 absolute bottom-2 right-2 rounded-full bg-green-500 transition ease-linear opacity-0 group-hover/text-red-500 group-hover/card:opacity-100">
          <HiOutlineShoppingCart className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="">
          <p className="flex gap-1 font-semibold">
            <span>$</span>
            <span>{price}</span>
          </p>
        </div>
        <p
          className={classNames("", {
            "text-green-500": isAvailable,
            "text-red-500": !isAvailable,
          })}
        >
          {isAvailable ? "In Stock" : "Out of Stock"}
        </p>
        <p className="text-gray-700">{shortDescription}</p>
      </div>
    </article>
  )
}
