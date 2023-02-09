import { html } from "../../../utils/htmlRaw.js";

export default function ProductList(products) {
  return html` <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Producto</th>
        <th scope="col">Precio</th>
        <th scope="col">Stock</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      ${products
        .map(
          (product, i) =>
            `<tr>
          <th scope="row">${i + 1}</th>
          <td>${product.description}</td>
          <td>${product.price}</td>
          <td>${product.stock}</td>
          <td>Acciones</td>
        </tr>`
        )
        .join("")}
    </tbody>
  </table>`;
}
