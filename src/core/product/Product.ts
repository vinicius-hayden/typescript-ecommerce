import Brand from "./Brand"
import Priceable from "./Priceable"
import Specifications from "./Specifications"

export default interface Product extends Priceable {
    id: number
    name: string
    description: string
    brand: Brand
    model: string
    image : string
    videoReview: string
    price: number
    rating: number
    tages: string[]
    specifications: Specifications
}