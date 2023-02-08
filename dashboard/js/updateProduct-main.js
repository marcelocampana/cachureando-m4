import { watchInventory } from "../../classes/inventory.js";

import UpdateProduct from "./adminComponents/updateProduct.js";

const updateProduct = document.getElementById("update-product");
updateProduct.innerHTML = UpdateProduct(watchInventory.getProduct(1));
