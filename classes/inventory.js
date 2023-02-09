import { watchs } from "./product.js";

export default class Inventory {
  constructor() {
    this.products = [];
  }
  getProduct(id) {
    const product = this.products.filter((product) => product.id === id);
    return product[0];
  }

  addProduct(product) {
    this.products.push(product);
  }
  updateProduct() {
    getProduct(id);
  }
}
