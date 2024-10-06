'use client'

import { Product } from "@/core";
import { useEffect, useState } from "react";

const urlBase = 'http://localhost:3005'

export default function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    
    async function getProducts() : Promise<Product []>{
        const response = await fetch(`${urlBase}/products`);
        const products = await response.json();
        return products ?? [];
    }

    async function getProductById(id : number) : Promise<Product | null>{
        const resp = await fetch(`${urlBase}/products/${id}`);
        const product = await resp.json();
        return product ?? null
    }

    useEffect(() => {
        getProducts().then(setProducts);
    })

    return {
        products, 
        getProductById
    }
}