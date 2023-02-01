import Carrousel from "./components/Carrousel.js";
import { Footer, Navbar } from "./components/Layout.js";
import ProductCard from "./components/ProductCard.js";

const nav = document.getElementById("nav");
nav.innerHTML = Navbar();

const carrouselComponent = Carrousel();

const carrousel = document.getElementById("product-grid");
carrousel.innerHTML = Carrousel();
const productCard = document.getElementById("product-grid");
productCard.innerHTML += ProductCard();

const footer = document.getElementById("footer");
footer.innerHTML = Footer();
