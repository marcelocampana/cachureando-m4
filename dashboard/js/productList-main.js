import { inventory } from "../../utils/createInventory.js";
import ProductList from "./adminComponents/ProductList.js";
import Sidebar from "./adminComponents/Sidebar.js";
import deleteIcon from "../icons/delete.js";
let deleteId;

const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = Sidebar();

const productList = document.getElementById("product-list");
productList.innerHTML = ProductList(inventory.getAllProducts());

export function formDelete(productId) {
  /*   const remove = html`<input type="hidden" value=${productId} />
    <button type="button" id="remove-product-button-${productId}">
      ${deleteIcon}
    </button>`; */

  const input = document.createElement("input");
  input.setAttribute("type", "hidden");
  input.setAttribute("value", productId);
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("id", `remove-product-button-${productId}`);
  button.innerHTML = deleteIcon;

  const formDeleteElement = document.getElementById(`form-delete-${productId}`);
  formDeleteElement.appendChild(input);
  formDeleteElement.appendChild(button);

  const removeProductButton = document.getElementById(
    `remove-product-button-${productId}`
  );
  removeProductButton.addEventListener("click", function () {
    inventory.removeProduct(deleteId);
    console.log(inventory.getAllProducts());
  });
}
