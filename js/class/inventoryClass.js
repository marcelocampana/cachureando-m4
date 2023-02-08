import { watchs } from "./productClass.js";

class Inventory {
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

export const watchInventory = new Inventory();

watchs.forEach((watch) => {
  watchInventory.addProduct(watch);
});
