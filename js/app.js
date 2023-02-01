/* ---Imports ---*/
import Carrousel from "./components/Carrousel.js";
import { Footer, Navbar } from "./components/Layout.js";
import ProductGrid from "./components/ProductGrid.js";
import ProductDetail from "./components/ProductDetail.js";
import displayStoreComponent from "../utils/displayStoreComponent.js";
import Cart from "./components/Cart.js";
import { products } from "../data/products.js";

/* ---Navbar y Footer ---*/
const nav = document.getElementById("nav");
nav.innerHTML = Navbar();
const footer = document.getElementById("footer");
footer.innerHTML = Footer();

const navProductGrid = document.getElementById(`nav-product-grid`);
navProductGrid.addEventListener("click", function () {
  displayStoreComponent("product-grid");
});
const navProductCart = document.getElementById(`nav-product-cart`);
navProductCart.addEventListener("click", function () {
  displayStoreComponent("cart");
  renderCart();
});

/* ---Catálogo--- */
const carrousel = document.getElementById("product-grid");
carrousel.innerHTML = Carrousel();
const productGrid = document.getElementById("product-grid");
productGrid.innerHTML += ProductGrid();
products.forEach((product) => {
  const displayDetailButton = document.getElementById(
    `display-detail-button-${product.id}`
  );
  displayDetailButton.addEventListener("click", function () {
    renderProductDetail(product.id);
  });
});

/* ---Pagina Detalle del producto --- */
//const productDetail = document.getElementById("product-detail");

function renderProductDetail(id) {
  displayStoreComponent("product-detail");
  const productDetail = document.getElementById("product-detail");
  productDetail.innerHTML = ProductDetail(id);
}

/* ---Carrito --- */
function renderCart() {
  displayStoreComponent("cart");
  const productCart = document.getElementById("cart");
  productCart.innerHTML = Cart();
}
