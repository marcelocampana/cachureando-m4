import { watchInventory } from "./class/inventoryClass.js";

import adminUpdateProduct from "./adminComponents/updateProduct.js";

const updateProductAdmin = document.getElementById("update-product-admin");
updateProductAdmin.innerHTML = adminUpdateProduct(watchInventory.getProduct(1));
