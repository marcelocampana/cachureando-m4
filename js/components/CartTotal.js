import { html } from "../../utils/htmlRaw.js";

export default function CartTotal() {
  return html`<div class="p-4 h-100 ms-auto border-start">
    <div class="px-lg-2">
      <div class="text-center mb-4 py-3 border-bottom">
        <h2 class="h6 mb-3 pb-1">Cart total</h2>
        <h3 class="fw-normal">$56.<small>00</small></h3>
      </div>
      <div class="text-center mb-4 pb-3 border-bottom">
        <h2 class="h6 mb-3 pb-1">Promo code</h2>
        <form class="needs-validation pb-2" method="post" novalidate="">
          <div class="mb-3">
            <input
              class="form-control"
              type="text"
              placeholder="Promo code"
              required=""
            />
            <div class="invalid-feedback">Please provide promo code.</div>
          </div>
          <button class="btn btn-secondary d-block w-100" type="submit">
            Apply promo code
          </button>
        </form>
      </div>
      <a
        class="btn btn-primary btn-shadow d-block w-100 mt-4"
        href="marketplace-checkout.html"
        ><i class="ci-locked fs-lg me-2"></i>Secure Checkout</a
      >
      <div class="text-center pt-2 pb-3">
        <small class="text-form text-muted">100% money back guarantee</small>
      </div>
    </div>
  </div>`;
}
