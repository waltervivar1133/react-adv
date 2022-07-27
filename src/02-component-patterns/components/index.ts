import { ProductCardHOCProps } from "../interfaces/interface";
import { ItemHandler } from "./ItemHandler";
import { ProductCard as ProductCardComponent } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ItemHandler } from "./ItemHandler";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";


export const ProductCard : ProductCardHOCProps = Object.assign(ProductCardComponent , {
  Title: ProductTitle,
  Image: ProductImage,
  ItemHandler : ItemHandler
}) 


export default ProductCard;