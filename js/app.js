let productsInCard = [];
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

    products.forEach((product) => {
      if (product.id === id) {
        const productPlusQuantity = {
          ...product,
          quantity: productDetailQuantity.value,
        };
        productsInCard.push(productPlusQuantity);
      }
    });
    displayStoreComponent("cart");
    renderCart(id, productsInCard);
    removeProducts();
    qtyProducts();
  });
}

/* ---Carrito --- */

function renderCart(id, productsInToCard) {
  displayStoreComponent("cart");
  const productCart = document.getElementById("cart");
  productCart.innerHTML = Cart(id, productsInToCard);
  const backGridCartButton = document.getElementById("back-grid-cart-button");
  backGridCartButton.addEventListener("click", function () {
    displayStoreComponent("product-grid");
  });
  const resetCartButton = document.getElementById("reset-cart-button");
  resetCartButton.addEventListener("click", function () {
    productsInCard = [];
    renderCart(0, productsInCard);
  });
}

// Delete elements from cart
function removeProducts() {
  let removeProductsFromCart = document.getElementsByClassName('cart-delete-item');
  for (let i = 0; i < removeProductsFromCart.length; i++) {
    let cartDeleteButton = removeProductsFromCart[i];
    cartDeleteButton.addEventListener('click', removeElement);
  }

  function removeElement(event) {
    let buttonClicked = event.target;
    // let removeItem = buttonClicked.closest('div.text-center.text-sm-start');
    let removeItem = buttonClicked.closest('div.d-block.d-sm-flex.align-items-center.py-4.border-bottom').remove();
    console.log(removeItem)
  }
}

// Change of products quantity
function qtyProducts() {
  let quantityInputs = document.getElementsByClassName("chanceQty"); 
  for (let i = 0; i< quantityInputs.length; i++) {
    let qtyInputs = quantityInputs[i];
    qtyInputs.addEventListener("change", qtyChange);
  }

  function qtyChange(event){
    let quantityChange = event.target;
    // console.log(quantityChange)
    if (isNaN(quantityChange.value) || quantityChange.value <= 0){
      quantityChange.value = 1;
    }
  }
}
