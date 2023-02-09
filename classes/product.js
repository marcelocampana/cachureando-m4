import { products } from "../data/products.js";
const percent = 10;
export default class Product {
  constructor(id, brand, description, features, imageUrl, price, stock) {
    (this.id = id),
      (this.brand = brand),
      (this.description = description),
      (this.features = features),
      (this.imageUrl = imageUrl),
      (this.price = price),
      (this.stock = stock);
  }

  getProduct() {
    return this.brand + " " + this.description;
  }
}

export const watchs = products.map(
  (product) =>
    new Product(
      product.id,
      product.brand,
      product.description,
      product.features,
      product.imageUrl,
      product.price,
      product.stock
    )
);

console.log(watchs);
