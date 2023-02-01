import { html } from "../../utils/htmlRaw.js";

export default function CartItem() {
  return html`<div
    class="d-block d-sm-flex align-items-center py-4 border-bottom"
  >
    <a
      class="d-block position-relative mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto"
      href="marketplace-single.html"
      style="width: 12.5rem;"
      ><img
        class="rounded-3 w-100"
        src="https://cdn.pixabay.com/photo/2017/01/28/14/16/clock-2015460_960_720.jpg"
        alt="Product" /><span
        class="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2"
        data-bs-toggle="tooltip"
        aria-label="Remove from Favorites"
        data-bs-original-title="Remove from Favorites"
        ><i class="ci-trash"></i></span
    ></a>
    <div class="text-center text-sm-start">
      <h3 class="h6 product-title mb-2">
        <a href="marketplace-single.html">Titulo del Producto</a>
      </h3>
      <div class="d-inline-block text-accent">$1800</div>
      <div class="form-inline pt-2">
        <input
          type="number"
          class="w-25 rounded-1 border border-secondary"
          min="1"
          value="1"
        />
      </div>
    </div>
  </div>`;
}
