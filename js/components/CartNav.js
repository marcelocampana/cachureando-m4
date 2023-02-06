import { html } from "../../utils/htmlRaw.js";

export default function CartNav(productsInToCard) {
  return html`<div
    class="d-flex flex-wrap justify-content-between align-items-center border-bottom pb-3"
  >
    <div class="py-1">
      <a
        class="btn btn-outline-accent btn-sm"
        href="#"
        id="back-grid-cart-button"
        ></i>Seguir comprando</a
      >
    </div>
    <div class="d-none d-sm-block py-1 fs-sm">
      Tienes ${productsInToCard ? productsInToCard.length : 0} productos en tu
      carro
    </div>
    <div class="py-1">
      <a
        class="btn btn-outline-danger btn-sm ${
          productsInToCard && productsInToCard.length < 1 && "d-none"
        }"
        href="#"
        id="reset-cart-button"
        ></i>Limpiar carro</a
      >
    </div>
  </div>`;
}
