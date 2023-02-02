import card from "./card.js";
import { html } from "../../utils/htmlRaw.js";
import productsData from "../../utils/fetch.js";

export default function ProductGrid() {
  productsData
    .then((data) => {
      data.products.forEach((product) =>
        card(
          product.id,
          product.brand,
          product.description,
          product.price,
          product.imageUrl,
          "cards" //Id del elemento donde se inserta el componente "Card"
        )
      );
    })
    .catch((error) => {
      console.error(error);
    });

  return html`<div class="mx-auto w-75 my-5">
    <div class="d-flex">
      <div class="row" id="cards"></div>
    </div>
  </div>`;
}
