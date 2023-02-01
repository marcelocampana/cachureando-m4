import { html } from "../../utils/htmlRaw.js";

export default function card(id, product, price, imageUrl) {
  const htmlId = `display-detail-button-${id}`;
  return html`
    <!-- Image on top -->
    <div class="col-6 col-md-4 mb-4">
      <div class="card">
        <img src="${imageUrl}" class="card-img-top" alt="Card image" />
        <div class="card-body">
          <h5 class="card-title">${product}</h5>
          <p class="card-text fs-sm text-secondary">
            Some quick example text to build on the card title and make up.
          </p>
          <p class="card-text fs-5 text-muted">$${price}</p>
          <button type="button" class="btn btn-sm btn-primary" id=${htmlId}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  `;
}
