import { watchInventory } from "../../classes/inventory.js";
const productToAdded = {
  id: 13,
  brand: "Festina",
  description: "Festina Reloj Hombre F20435/232 ",
  price: 199000,
  imageUrl:
    "https://falabella.scene7.com/is/image/Falabella/16330228_1?wid=800&hei=800&qlt=70",
  features:
    "Los relojes Festina son la mezcla perfecta de elegancia y funcionalidad. Festina ofrece diseños distinguidos e innovación tecnológica constante.",
  stock: 8,
};

import AddProduct from "./adminComponents/AddProduct.js";

const addProductToStock = document.getElementById("add-product");
addProductToStock.innerHTML = AddProduct();

const addProductToStockButton = document.getElementById("add-product");

addProductToStockButton.addEventListener("click", function () {
  watchInventory.addProduct(productToAdded);
  console.log(watchInventory.products);
});
