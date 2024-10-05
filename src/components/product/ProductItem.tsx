'use client'
import { Product } from "@/core";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export interface ProductItemProps {
  product: Product;
}

export default function ProductItem(props: ProductItemProps) {
  const { product } = props;
  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
    >
      <div className="h-48 w-full relative">
        <Image
          src={product.image}
          className="object-contain"
          fill
          alt="Product Image"
        />
      </div>
      <div className="flex-1 flex flex-col p-5 gap-3 border-t border-white/10">
        <span className="text-lg font-semibold">{props.product.name}</span>
        <span className="text-sm border-b border-dashed self-start">
          {product.specifications.title}
        </span>
        <div className="flex-1"></div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
            From {props.product.basePrice}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            To {props.product.salesPrice}
          </span>
        </div>
        <button className="flex justify-center h-8 gap-2 items-center bg-violet-700 hover:border-2 border-emerald-500 rounded-full"
        onClick={(e: any) => {
            e.preventDefault();
            console.log("Item Added!")
        }}
        >
            <IconShoppingCartPlus size={20} />
            <span>Add</span>
        </button>
      </div>
    </Link>
  );
}
