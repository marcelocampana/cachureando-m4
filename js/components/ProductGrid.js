import card from "./card.js";
import { html } from "../../utils/htmlRaw.js";
import orderList from "../../utils/orderList.js";
import Filter from "./Filter.js";

export default function ProductGrid(productStock) {
  return html` ${Filter()}
    <div class="mx-auto w-75 my-5">
      <div class="d-flex">
        <div class="row">
          ${productStock
            .sort(orderList)
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
