import { html } from "../../utils/htmlRaw.js";

export default function Filter() {
  return html` <div class="d-flex mx-auto w-75 justify-content-end mt-5">
    <div class="col-md-3">
      <div class="ms-2">
        <label for="search-filter" class="form-label">Buscar</label>
        <input
          type="text"
          class="form-control"
          id="search-filter"
          placeholder="Buscar"
        />
      </div>
    </div>
    <div class="col-md-3">
      <div class="ms-2">
        <label for="categories-filter" class="form-label"> Categorias </label>
        <select class="form-select" id="categories-filter">
          <option value="">Choose...</option>
          <option>United States</option>
        </select>
      </div>
    </div>
    <div class="col-md-3">
      <div class="ms-2">
        <label for="price-categories" class="form-label">Precio</label>
        <input
          type="range"
          class="form-control"
          id="price-categories"
          min="0"
          max="10"
        />
      </div>
    </div>
  </div>`;
}
