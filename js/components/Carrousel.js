import { html } from "../../utils/htmlRaw.js";

export default function Carrousel() {
  return html`<div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner" style=" height:300px">
      <div class="carousel-item active">
        <img
          src="https://festina.cl/modules/ps_banner/img/4c5520cb79a1969531ffc1bae1eaab67.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://cdn.shopify.com/s/files/1/0556/1538/9878/files/SlideWebBANNER_1500x440B_841ca24b-2846-400a-a0c5-b781a74a4dc4_1512x.jpg?v=1674561008"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://media6.festinagroup.com/static/tiendas_online/festina/images/home/bannerMissFrance.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;
}
