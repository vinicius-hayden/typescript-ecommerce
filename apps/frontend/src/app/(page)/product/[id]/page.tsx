'use client'
import { Product } from "@gstore/core";
import useProducts from "@/data/hooks/useProducts";
import { useEffect, useState } from "react";
import ProductTitle from "@/components/product/ProductTitle";
import ProductInformations from "@/components/product/ProductInformations";
import ProductSpecifications from "@/components/product/ProductSpecifications";

export default function ProductPage(props: any) {
    const { getProductById } = useProducts();
    const [product, setProduct] = useState<Product | null>(null)

    useEffect(() => {
        getProductById(+props.params.id).then(setProduct);
    }, [props.params.id])

    return product ? (
        <div className="flex flex-col gap-20">
            <ProductTitle product={product}/>
            <ProductInformations product={product}/>
        </div>
    ) : <div>Product not found</div>
}