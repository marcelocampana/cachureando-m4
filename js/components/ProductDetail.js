import { html } from "../../utils/htmlRaw.js";
import productsData from "../../utils/fetch.js";

const origin = window.location.search.split("=");
productsData.then((data) => {
  const productResult = data.products.filter(
    (product) => product.id == origin[1]
  );
  console.log(productResult);
  ProductDetail(productResult[0]);
});

export default function ProductDetail(product) {
  const detailResult = html`<div class="row gy-4 mx-auto w-75 my-5">
    <h1 class="text-secondary fs-3">Detalle de producto</h1>
    <!-- Imagen de producto-->

    <div class="col-md-6">
      <div class="position-relative rounded-3 mb-lg-4 mb-2">
        <img
          class="border secondary-subtle"
          style="height: 400px;"
          src="${product.imageUrl}"
          alt="Product image"
        />
      </div>
      <div class="mpt-2 text-lg-start text-center"></div>
    </div>
    <!-- Detalles del Producto-->
    <div class="col-lg-6">
      <div class="ms-md-3 ps-xl-5 ps-lg-3">
        <h2 class="h3 mb-3 text-warning">${product.brand}</h2>
        <div
          class="d-flex align-items-center flex-wrap text-nowrap mb-sm-4 mb-3 fs-sm"
        >
          <div class="mb-2 me-sm-3 me-2 text-muted">
            Publicado en Oct 29, 2022
          </div>
          <div class="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start text-muted">
            <i class="ci-eye me-1 fs-base mt-n1 align-middle"></i>15 Favoritos
          </div>
        </div>
        <div class="row row-cols-sm-1 row-cols-1 mb-4 pb-md-2">
          <!-- Descripción-->
          <p class="mb-4 pb-md-2 fs-sm">${product.description}</p>
          <p class="mb-4 pb-md-2 fs-sm text-muted">${product.features}</p>
          <div>Cantidad</div>
          <input
            type="number"
            class="w-25 ms-2 rounded-1 border
          border-secondary-subtle"
            min="1"
            value="1"
          />
          <a
            class="btn btn-warning mt-4 ms-2 w-75 p-3"
            href="/cart.html?id=${product.id}"
          >
            Agregar al carrito
          </a>
        </div>
      </div>
    </div>
  </div>`;

  document.getElementById("product-detail").innerHTML = detailResult;
}
