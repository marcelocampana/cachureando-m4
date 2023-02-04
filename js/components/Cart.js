import { html } from "../../utils/htmlRaw.js";
import CartItem from "./CartItem.js";
import CartNav from "./CartNav.js";
import CartTotal from "./CartTotal.js";

export default function Cart(id, productsInToCard) {
  console.log(productsInToCard);
  return html`<div class="row w-75 mx-auto mt-5">
    <div class="col-12 col-md-8">
      <div>${CartNav(productsInToCard)}</div>
      ${productsInToCard && productsInToCard.length > 0
        ? productsInToCard
            .map((product) =>
              CartItem(
                product.id,
                product.brand,
                product.description,
                product.imageUrl,
                product.price,
                product.quantity
              )
            )
            .join("")
        : ` <div class="text-center mt-5 fs-5 text-secondary-emphasis">El carrito está vacío:(</div>`}
    </div>
    <div class="col-12 col-md-4">${CartTotal()}</div>
  </div>`;
}
