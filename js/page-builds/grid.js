/* ---Imports ---*/
import Carrousel from "../components/Carrousel.js";

import ProductGrid from "../components/ProductGrid.js";

import displayStoreComponent from "../../utils/displayStoreComponent.js";
import Cart from "../components/Cart.js";

/* const navProductGrid = document.getElementById(`nav-product-grid`);
navProductGrid.addEventListener("click", function () {
  displayStoreComponent("product-grid");
});
const navProductCart = document.getElementById(`nav-product-cart`);
navProductCart.addEventListener("click", function () {
  displayStoreComponent("cart");
  renderCart();
}); */

/* ---Catálogo--- */
const carrousel = document.getElementById("product-grid");
carrousel.innerHTML = Carrousel();
const productGrid = document.getElementById("product-grid");
productGrid.innerHTML += ProductGrid();
/* products.forEach((product) => {
  const displayDetailButton = document.getElementById(
    `display-detail-button-${product.id}`
  );
  displayDetailButton.addEventListener("click", function () {
    renderProductDetail(product.id);
  });
}); */

/* ---Pagina Detalle del producto --- */
//const productDetail = document.getElementById("product-detail");
