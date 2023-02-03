import { html } from "../../utils/htmlRaw.js";

export default function CartItem(
  id,
  brand,
  description,
  imageUrl,
  price,
  quantity
) {
  return html`<div
    class="d-block d-sm-flex align-items-center py-4 border-bottom"
  >
    <a
      class="d-block position-relative mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto"
      href="marketplace-single.html"
      style="width: 12.5rem;"
      ><img class="rounded-3 w-100" src=${imageUrl} alt="Product" /><span
        class="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2"
        data-bs-toggle="tooltip"
        aria-label="Remove from Favorites"
        data-bs-original-title="Remove from Favorites"
        ><i class="ci-trash"></i></span
    ></a>
    <div class="text-center text-sm-start">
      <h3 class="h6 product-title mb-2">
        <div>${brand}-${description}</div>
      </h3>
      <div class="form-inline pt-2">
        <input
          type="number"
          class="w-25 rounded-1 border border-secondary"
          min="1"
          value=${quantity}
        />
      </div>
      <div class="d-inline-block text-accent mt-3">
        ${"$" + Intl.NumberFormat("es-CL").format(price)} c/u
      </div>

      <div class=" text-accent">
        ${"$" + Intl.NumberFormat("es-CL").format(price * quantity)} en total.
      </div>
      <div class="mt-3">
        <a
          href="#"
          style="font-size:14px"
          class="text-danger text-decoration-underline"
          id="cart-delete-item"
        >
          Eliminar
        </a>
      </div>
    </div>
  </div>`;
}
