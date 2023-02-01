import { html } from "../../utils/htmlRaw.js";
import { products } from "../../data/products.js";
export default function ProductGrid(id) {
  const product = products.filter((product) => product.id === id);

  return html`<div class="row gy-4 mx-auto w-75">
    <h1 class="text-secondary fs-3">Detalle de producto</h1>
    <!-- Imagen de producto-->

    <div class="col-lg-6">
      <div class="position-relative rounded-3 overflow-hidden mb-lg-4 mb-2">
        <img
          style="height: 400px;"
          src="https://cdn.pixabay.com/photo/2017/01/28/14/16/clock-2015460_960_720.jpg"
          alt="Product image"
        />
        <div class="image-zoom-pane"></div>
      </div>
      <div class="pt-2 text-lg-start text-center"></div>
    </div>
    <!-- Detalles del Producto-->
    <div class="col-lg-6">
      <div class="ps-xl-5 ps-lg-3">
        <h2 class="h3 mb-3">${product[0].product}</h2>
        <div
          class="d-flex align-items-center flex-wrap text-nowrap mb-sm-4 mb-3 fs-sm"
        >
          <div class="mb-2 me-sm-3 me-2 text-muted">
            Publicado en Oct 29, 2022
          </div>
          <div class="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start text-muted">
            <i class="ci-eye me-1 fs-base mt-n1 align-middle"></i>15 vistas
          </div>
          <div class="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start text-muted">
            <i class="ci-heart me-1 fs-base mt-n1 align-middle"></i>4 favoritos
          </div>
        </div>
        <div class="row row-cols-sm-1 row-cols-1 mb-4 pb-md-2">
          <!-- Descripción-->
          <p class="mb-4 pb-md-2 fs-sm">
            Hendrerit interdum sit massa lobortis. Habitant faucibus lorem dui
            mauris. Pellentesque nunc, tortor quam consequat odio. Sed faucibus
            id rhoncus, scelerisque tristique ultricies nam.
          </p>
          <div>Cantidad</div>
          <input
            type="number"
            class="w-25 ms-2 rounded-1 border border-secondary"
            min="1"
            value="1"
          />
          <button
            type="button"
            class="btn btn-primary mt-4 ms-2 w-75 p-3"
            id="display-detail-button"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  </div>`;
}
