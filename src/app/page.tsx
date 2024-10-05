import Image from "next/image";
import ProductItem from "@/components/product/ProductItem";
import { products } from "@/core";

export default function Home() {
  return (
    <div className="flex gap-5 flex-wrap"> 
      <ProductItem product={products[0]}></ProductItem>
      <ProductItem product={products[1]}></ProductItem>
      <ProductItem product={products[2]}></ProductItem>
      <ProductItem product={products[3]}></ProductItem>
    </div>
  );
}
