import sendMail from "./sendMail.js";

export default function reduceStock(cartProducts, purchaseNumber, stock) {
  console.log(cartProducts);
  cartProducts.forEach((product) => {
    if (product.stock > 0) {
      product.stock = product.stock - product.quantity;
      if (product.stock === 0) {
        sendMail(product.id, product.description);
      }
    }
    purchaseNumber += 1;
  });

  return newStock(purchaseNumber, cartProducts, stock);
}

function newStock(purchaseNumber, cartProducts, stock) {
  let productId = "";

  if (purchaseNumber > 0) {
    productId = cartProducts.map((product) => product.id);
    console.log(productId);
    productId.forEach((item) => {
      deleteProduct(item, stock);
    });

    stock = cartProducts.concat(...stock);

    return stock;
  }
}

function deleteProduct(item, stock) {
  let productToEliminate = [];
  productToEliminate.push(stock.findIndex((product) => product.id === item));
  return productToEliminate >= 0 && stock.splice(productToEliminate, 1);
}
