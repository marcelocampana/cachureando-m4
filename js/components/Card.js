import { html } from "../../utils/htmlRaw.js";

function card(id, brand, description, price, imageUrl, element) {
  const htmlId = `display-detail-button-${id}`;
  const cardResult = html`
    <!-- Image on top -->
    <div class="col-12 col-md-4 col-lg-3 mb-4">
      <div class="card">
        <img src="${imageUrl}" class="card-img-top" alt="Card image" />
        <div class="card-body">
          <h5 class="card-title text-warning">${brand}</h5>
          <p class="card-text fs-sm text-secondary">${description}</p>
          <p class="card-text fs-4">
            ${"$" + Intl.NumberFormat("es-CL").format(price)}
          </p>
          <a
            class="btn btn-sm btn-warning"
            id=${htmlId}
            href="product-detail.html?id=${id}"
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
  `;
  document.getElementById(element).innerHTML += cardResult;
}

export default card;
