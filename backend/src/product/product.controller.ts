import { Controller, Get, Param } from '@nestjs/common';
import { Product, products } from 'src/core';

@Controller('products')
export class ProductController {
    @Get()
    getProduts(): Product[] {
        return products.map((product) => ({
            ...product,
            specifications: {title: product.specifications.title}
        }));
    } 

    @Get(':id')
    async getProductById(@Param('id') id: string): Promise<Product | null > {
        const product = products.find((product) => product.id === +id);
        return product ?? null;
    }
}
