import { products } from "../data/products";

const sale = [
  {
    id: 3,
    quantity: 1,
  },

  {
    id: 5,
    quantity: 2,
  },
  {
    id: 9,
    quantity: 4,
    stock: 5,
  },
  {
    id: 9,
    quantity: 5,
    stock: 5,
  },
];

export default function checkout(sale) {
  const checkoutCartButton = document.getElementById("checkout-cart-button");
  checkoutCartButton.addEventListener("click", function () {
    /*     falta instruccion  */
    sale.forEach((product) => {
      product.stock > 0 && product.quantity - product.stock;
    });
  });
}
