// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { renderNav } from "./navbar";
import { renderHome } from "./home";
import { renderFooter } from "./footer";
import { renderMenu } from "./menu";
import { renderContacto} from "./contacto";

import grillBackgr from "../img/parrilla-background.jpg";

document.body.style.backgroundImage = `url(${grillBackgr})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "cover";
let content = document.getElementById("content")
content.classList.add("cover-container", "d-flex", "w-100", "h-100", "p-3", "mx-auto", "flex-column");
function home() {
    content.innerHTML = "";
    renderNav();
    renderHome();
    renderFooter();
  }
  function menu() {
    content.innerHTML = "";
    renderNav();
    renderMenu();
    renderFooter();
  }
  function contacto() {
    content.innerHTML = "";
    renderNav();
    renderContacto();
    renderFooter();
  }
  
  home();
  document.addEventListener("click", (e) => {
    const target = e.target.innerText;
  
    if (target === "Home") home();
    if (target === "Menu") menu();
    if (target === "Contacto") contacto();
  });
