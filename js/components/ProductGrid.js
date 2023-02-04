import card from "./card.js";
import { html } from "../../utils/htmlRaw.js";

export default function ProductGrid(productStock) {
  return html`<div class="mx-auto w-75 my-5">
    <div class="d-flex">
      <div class="row">
        ${productStock
          .map((product) =>
            card(
              product.id,
              product.brand,
              product.description,
              product.price,
              product.imageUrl,
              product.stock
            )
          )
          .join("")}
      </div>
    </div>
  </div>`;
}
