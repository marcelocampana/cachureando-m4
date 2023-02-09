import { inventory } from "../../utils/createInventory.js";
import ProductList from "./adminComponents/ProductList.js";

const productList = document.getElementById("product-list");
productList.innerHTML = ProductList(inventory.getAllProducts());
