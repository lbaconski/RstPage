// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//import { renderNav } from "./navbar";
import { renderHome } from "./home";
//import { renderFooter } from "./footer";
import { renderMenu } from "./menu";
import { renderContacto} from "./contacto";

import rioParana from "../src/img/rio-parana.jpg";
import grillBackgr from "../src/img/parrilla-background.jpg";

document.body.style.backgroundImage = `url(${rioParana})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";


