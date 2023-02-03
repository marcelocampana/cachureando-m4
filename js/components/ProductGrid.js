import card from "./card.js";
import { products } from "../../data/products.js";
import { html } from "../../utils/htmlRaw.js";

export default function ProductGrid() {
  return html`<div class="mx-auto w-75 my-5">
    <div class="d-flex">
      <div class="row">
        ${products
          .map((product) =>
            card(
              product.id,
              product.brand,
              product.description,
              product.price,
              product.imageUrl
            )
          )
          .join("")}
      </div>
    </div>
  </div>`;
}
