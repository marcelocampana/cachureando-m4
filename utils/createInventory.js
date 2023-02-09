import Inventory from "../classes/inventory.js";
import watchs from "../utils/createProduct.js";

export const watchInventory = new Inventory();

watchs.forEach((watch) => {
  watchInventory.addProduct(watch);
});
