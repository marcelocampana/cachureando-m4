/* ---Imports ---*/

import { Footer, Navbar } from "./components/Layout.js";
import ProductGrid from "./components/ProductGrid.js";
import { products } from "../data/products.js";
import Carrousel from "./components/Carrousel.js";
import ProductDetail from "./components/ProductDetail.js";
import Cart from "./components/Cart.js";
import Checkout from "./components/Checkout.js";
import displayStoreComponent from "../utils/displayStoreComponent.js";
import reduceStock from "../utils/reduceStock.js";

//let productsInCart = [];
let customerPurchaseNumber = 0;
var newStockOfProducts = [];
let productsInCart = [];

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
function renderGrid(productData) {
  const carrousel = document.getElementById("product-grid");
  carrousel.innerHTML = Carrousel();
  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML += ProductGrid(productData);
  productData.forEach((product) => {
    const displayDetailButton = document.getElementById(
      `display-detail-button-${product.id}`
    );
    displayDetailButton.addEventListener("click", function () {
      renderProductDetail(product.id, productData, productsInCart);
    });
  });
}
renderGrid(products);

/* ---Pagina Detalle del producto --- */

function renderProductDetail(id, productData, cartProducts) {
  displayStoreComponent("product-detail");
  const productDetail = document.getElementById("product-detail");
  productDetail.innerHTML = ProductDetail(id, productData);
  const backGridDetailButton = document.getElementById(
    "back-grid-detail-button"
  );
  backGridDetailButton.addEventListener("click", function () {
    displayStoreComponent("product-grid");
  });

  const addToCartButton = document.getElementById("add-to-cart-button");

  addToCartButton.addEventListener("click", function () {
    const productDetailQuantity = document.getElementById(
      "quantity-detail-input"
    );

    productData.forEach((product) => {
      if (product.id === id) {
        const productPlusQuantity = {
          ...product,
          quantity: productDetailQuantity.value,
        };
        cartProducts.push(productPlusQuantity);
      }
    });
    displayStoreComponent("cart");
    renderCart(cartProducts, productData);
  });
}

/* ---Carrito --- */

function renderCart(cartProducts, productData) {
  displayStoreComponent("cart");
  const productCart = document.getElementById("cart");
  productCart.innerHTML = Cart(cartProducts);
  const backGridCartButton = document.getElementById("back-grid-cart-button");
  backGridCartButton.addEventListener("click", function () {
    displayStoreComponent("product-grid");
  });
  const resetCartButton = document.getElementById("reset-cart-button");
  resetCartButton.addEventListener("click", function () {
    productsInCart = [];
    renderCart(productsInCart);
  });
  const checkoutCartButton = document.getElementById("checkout-cart-button");
  checkoutCartButton.addEventListener("click", function () {
    renderCheckout(cartProducts, productData);
  });
}

/* --- Checkout --- */

function renderCheckout(cartProducts, productData) {
  displayStoreComponent("checkout");
  const checkout = document.getElementById("checkout");
  checkout.innerHTML = Checkout();

  const values = reduceStock(cartProducts, customerPurchaseNumber, productData);

  productsInCart = [];

  const backToHomeCheckoutButton = document.getElementById(
    "back-to-home-checkout-button"
  );
  backToHomeCheckoutButton.addEventListener("click", function () {
    displayStoreComponent("product-grid");
    renderGrid(values);
  });
}

//checkout-cart-button
