import { Product } from "@/core";
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
        <Image src={product.image} fill alt="Product Image" />
      </div>

      {props.product.name}
    </Link>
  );
}
