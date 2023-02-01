import { html } from "../../utils/htmlRaw.js";

export default function Carrousel() {
  return html`<div id="carouselExample" class="carousel slide">
    <div class="carousel-inner" style=" height:300px">
      <div class="carousel-item active">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/28/14/16/clock-2015460_960_720.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/01/18/32/pocket-watch-2031021_960_720.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/29/13/39/analog-watch-1869928_960_720.jpg"
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
