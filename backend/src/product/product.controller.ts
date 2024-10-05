import { Controller, Get } from '@nestjs/common';
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
}
