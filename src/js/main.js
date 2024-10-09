// Import our custom CSS
import '../css/styles.css'

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
content.classList.add();
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
