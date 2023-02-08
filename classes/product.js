import { products } from "../data/products.js";

class Product {
  constructor(id, brand, description, features, imageUrl, price, stock) {
    (this.id = id),
      (this.brand = brand),
      (this.description = description),
      (this.features = features),
      (this.imageUrl = imageUrl),
      (this.price = price),
      (this.stock = stock);
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
