import { html } from "../../utils/htmlRaw.js";

export default function ProductDetail(id, productData) {
  const product = productData.filter((product) => product.id === id);

  return html`<div class="row gy-4 mx-auto w-75">
    <h1 class="text-secondary fs-3">Detalle de producto</h1>
    <!-- Imagen de producto-->

    <div class="col-lg-6">
      <div
        class="position-relative rounded-3 overflow-hidden mb-lg-4 mb-2 border border-secondary-subtle"
      >
        <img
          style="height: 400px;"
          class="border-secondary"
          src="${product[0].imageUrl}"
          alt="Product image"
        />
      </div>
      <div class="pt-2 text-lg-start text-center"></div>
    </div>
    <!-- Detalles del Producto-->
    <div class="col-lg-6">
      <div class="ps-xl-5 ps-lg-3">
        <h2 class="h3 mb-1 text-warning mb-4">${product[0].brand}</h2>

        <div class="row row-cols-sm-1 row-cols-1 mb-4 pb-md-2">
          <!-- Descripción-->
          <p class="mb-1 pb-md-2 fs-sm">${product[0].description}</p>
          <p class="mb-4 pb-md-2 fs-sm text-muted">${product[0].features}</p>
          <p class="mb-2 pb-md-2 fs-4">
            ${"$" + Intl.NumberFormat("es-CL").format(product[0].price)}
          </p>
          <div>Cantidad</div>
          <input
            type="number"
            id="quantity-detail-input"
            class="w-25 ms-2 rounded-1 border border-light-subtle"
            min="1"
            max=${product[0].stock}
            value="1"
          />
          <p class="card-text text-danger-emphasis my-2">
            ${product[0].stock < 4 && product[0].stock >= 2
              ? "Sólo " + product[0].stock + " en existencia"
              : ""}
            ${product[0].stock === 1 ? "Único en existencia!" : ""}
          </p>

          <div class="row">
            <div class="col-7 m-0 p-0">
              <button
                type="button"
                class="btn btn-warning mt-4 btn-lg  p-3 w-100"
                id="add-to-cart-button"
              >
                Agregar al carrito
              </button>
            </div>
            <div class="col-5 mt-1 ">
              <button
                type="button"
                class="btn btn-outline-warning btn-sm mt-4 w-100 p-3"
                id="back-grid-detail-button"
              >
                Ir al Catálogo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}
