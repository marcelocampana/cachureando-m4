import { html } from "../../utils/htmlRaw.js";
import displayStoreComponent from "../../utils/displayStoreComponent.js";
import { menus } from "../../data/menu.js";

function menu(label, link) {
  return html`<li class="nav-item">
    <a class="nav-link" id="nav-${link}" href="#" style="color:#fff">
      ${label}
    </a>
  </li>`;
}

export function Navbar() {
  return html` 
  <div class="container-fluid" style="background-color: #3f51b5; color:#fff">
    <nav
      class="navbar navbar-expand-lg navbar-light px-2"
      style="background-color: #3f51b5; color:#fff"
    >
      <a class="navbar-brand" href="#" style="color:#fff"> Navbar </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
         ${menus.map((item) => menu(item.label, item.link)).join("")}
         
        </ul>
      </div>
    </nav>
  </div>
  </div>`;
}

export function Footer() {
  return html`<!-- Remove the container if you want to extend the Footer to full width. -->
    <div class="container-fluid my-5" style="background-color: #3f51b5">
      <!-- Footer -->
      <footer class="text-center text-white" style="background-color: #3f51b5">
        <!-- Grid container -->
        <div class="container">
          <!-- Section: Links -->
          <section class="mt-5">
            <!-- Grid row-->
            <div class="row text-center d-flex justify-content-center pt-5">
              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white">About us</a>
                </h6>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white">Products</a>
                </h6>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white">Awards</a>
                </h6>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white">Help</a>
                </h6>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white">Contact</a>
                </h6>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row-->
          </section>
          <!-- Section: Links -->

          <hr class="my-5" />

          <!-- Section: Text -->
          <section class="mb-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  distinctio earum repellat quaerat voluptatibus placeat nam,
                  commodi optio pariatur est quia magnam eum harum corrupti
                  dicta, aliquam sequi voluptate quas.
                </p>
              </div>
            </div>
          </section>
          <!-- Section: Text -->

          <!-- Section: Social -->
          <section class="text-center mb-5">
            <a href="" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-github"></i>
            </a>
          </section>
          <!-- Section: Social -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div
          class="text-center p-3"
          style="background-color: rgba(0, 0, 0, 0.2)"
        >
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/"
            >MDBootstrap.com</a
          >
        </div>
        <!-- Copyright -->
      </footer>
      <!-- Footer -->
    </div>
    <!-- End of .container -->`;
}
