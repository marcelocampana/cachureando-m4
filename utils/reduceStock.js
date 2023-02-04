import { products } from "../data/products.js";

export default function reduceStock(
  productsInCart,
  customerPurchaseNumber,
  newStockOfProducts
) {
  productsInCart.forEach((product) => {
    if (product.stock > 0) {
      product.stock = product.stock - product.quantity;
    }
    customerPurchaseNumber += 1;
  });

  return newStock(customerPurchaseNumber, productsInCart, newStockOfProducts);
}

function newStock(customerPurchaseNumber, productsInCart, newStockOfProducts) {
  let productId = "";

  if (customerPurchaseNumber > 0) {
    productId = productsInCart.map((product) => product.id);

    productId.forEach((item) => {
      deleteProduct(item);
    });

    newStockOfProducts = productsInCart.concat(...products);

    return newStockOfProducts;
  }
}

function deleteProduct(item) {
  let productToEliminate = [];
  productToEliminate.push(products.findIndex((product) => product.id === item));
  return productToEliminate >= 0 && products.splice(productToEliminate, 1);
}
