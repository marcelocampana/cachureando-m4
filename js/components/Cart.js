import { html } from "../../utils/htmlRaw.js";
import CartItem from "./CartItem.js";
import CartNav from "./CartNav.js";
import CartTotal from "./CartTotal.js";

export default function Cart() {
  return html`<div class="row w-75 mx-auto mt-5">
    <div class="col-12 col-md-8">
      <div>${CartNav()}</div>
      <div>${CartItem()}</div>
    </div>
    <div class="col-12 col-md-4">${CartTotal()}</div>
  </div>`;
}
