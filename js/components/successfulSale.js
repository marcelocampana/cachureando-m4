import { html } from "../../utils/htmlRaw.js";

export default function successSale() {
  return html`<div class="card text-center">
    <div class="card-header">Compra finalizada</div>
    <div class="card-body">
      <h5 class="card-title">Gracias por su compra</h5>
      <p class="card-text">Pronto recibira su Festina! .</p>
      <a href="#" class="btn btn-primary">Volver al inicio</a>
    </div>
    <div class="card-footer text-muted">Hecho con</div>
  </div>`;
}
