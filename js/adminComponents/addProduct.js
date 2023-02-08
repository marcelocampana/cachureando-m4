import { html } from "../../utils/htmlRaw.js";

export default function adminAddProduct() {
  return html` <form class="mx-auto w-50">
    <h1 class="mt-3 ">Agregar producto</h1>
    <p class="mb-4">Ingresa los datos del producto a agregar</p>
    <div class="mb-3">
      <label for="admin-update-brand" class="form-label">Marca</label>
      <input
        type="text"
        class="form-control"
        id="admin-update-brand"
        required
      />
    </div>
    <div class="mb-3">
      <label for="admin-update-description" class="form-label"
        >Descripción</label
      >
      <input
        type="text"
        class="form-control"
        id="admin-update-description"
        required
      />
    </div>

    <div class="mb-3">
      <label for="admin-update-imageUrl" class="form-label"
        >URL del imagen</label
      >
      <input
        type="text"
        class="form-control"
        id="admin-update-imageUrl"
        required
      />
    </div>
    <div class="mb-3">
      <label for="admin-update-price" class="form-label" disable>Precio</label>
      <input
        type="text"
        class="form-control"
        id="admin-update-price"
        required
      />
    </div>
    <div class="mb-3">
      <label for="admin-update-stock" class="form-label">Stock</label>
      <input
        type="text"
        class="form-control"
        id="admin-update-stock"
        required
      />
    </div>
    <div class="mb-3">
      <label for="admin-update-features" class="form-label">Stock</label>
      <textarea
        rows="3"
        name="admin-update-features"
        class="form-control"
        id="admin-update-features"
      ></textarea>
    </div>
    <div class="col-12">
      <button type="button" class="btn btn-primary">Modificar</button>
    </div>
  </form>`;
}
