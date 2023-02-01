import { html } from "../../utils/htmlRaw.js";

export default function CartNav() {
  return html`<div
    class="d-flex flex-wrap justify-content-between align-items-center border-bottom pb-3"
  >
    <div class="py-1">
      <a class="btn btn-outline-accent btn-sm" href="marketplace-category.html"
        ><i class="ci-arrow-left me-1 ms-n1"></i>Seguir comprando</a
      >
    </div>
    <div class="d-none d-sm-block py-1 fs-sm">
      Tienes 3 productos en tu carro
    </div>
    <div class="py-1">
      <a class="btn btn-outline-danger btn-sm" href="marketplace-category.html"
        ><i class="ci-close fs-xs me-1 ms-n1"></i>Limpiar carro</a
      >
    </div>
  </div>`;
}
