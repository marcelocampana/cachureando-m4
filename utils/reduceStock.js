export default function reduceStock(productsInCart) {
  productsInCart.forEach((product) => {
    if (product.stock > 0) {
      product.stock = product.stock - product.quantity;
    }
    console.log(productsInCart);
  });
}
