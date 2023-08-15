import { Product } from "../product";

export interface Products {
  products: Product[];
  deleteOnClick(index: number);
}
