//import products from "../../data/products.js";
import { html } from "../../utils/htmlRaw.js";

export default function card(id, product, price) {
  return html` <div class="card ms-2" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${product}</h5>
      <p class="card-text">${price}</p>
      <a href="#" class="btn btn-primary">Comprar</a>
    </div>
  </div>`;
}
