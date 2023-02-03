import { html } from "../../utils/htmlRaw.js";

export default function card(id, brand, description, price, imageUrl) {
  const htmlId = `display-detail-button-${id}`;
  return html`
    <!-- Image on top -->
    <div class="col-6 col-md-4 col-lg-3 mb-4">
      <div class="card">
        <img src="${imageUrl}" class="card-img-top" alt="Card image" />
        <div class="card-body">
          <h5 class="card-title text-warning">${brand}</h5>
          <p class="card-text fs-sm text-secondary">${description}</p>
          <p class="card-text fs-5">
            ${"$" + Intl.NumberFormat("es-CL").format(price)}
          </p>
          <button type="button" class="btn btn-sm btn-warning" id=${htmlId}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  `;
}
