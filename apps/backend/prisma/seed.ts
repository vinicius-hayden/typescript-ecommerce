import { PrismaClient } from "@prisma/client";
import { products } from "@gstore/core";;
import * as dotenv from 'dotenv'
dotenv.config();

const prisma = new PrismaClient();

async function seed() {
    await prisma.product.createMany({
        data: products.map((product) => ({
            ...product,
            id: undefined
        })),
    });
}

seed();