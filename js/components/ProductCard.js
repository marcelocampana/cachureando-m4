import card from "./card.js";
import { products } from "../../data/products.js";
import { html } from "../../utils/htmlRaw.js";

export default function ProductCard() {
  return html`<div class="mx-auto w-75 my-5">
    <div class="d-flex">
      ${products
        .map((product) => card(product.id, product.product, product.price))
        .join("")}
    </div>
  </div>`;
}
