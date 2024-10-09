// Import our custom CSS
import '../css/styles.css'

import { renderNav } from "./navbar";
import { renderHome } from "./home";
import { renderFooter } from "./footer";
import { renderMenu } from "./menu";
import { renderContacto} from "./contacto";


let content = document.getElementById("content")

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
