import rioParana from "../src/img/rio-parana.jpg";
import grillBackgr from "../src/img/parrilla-background.jpg";

document.body.style.backgroundImage = `url(${rioParana})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";

const content = document.getElementById('content');
content.innerHTML = `
    <h1>Bienvenidos a El Asador de Rosario</h1>
    <img src="${grillBackgr}" alt="El Asador" style="max-width: 100%; height: auto;">
    <p>
        Situado en la vera del Río Paraná en la ciudad de Rosario, El Asador es un restaurante donde la cocina a la parrilla se convierte en arte. 
        Cada plato es elaborado con ingredientes de la más alta calidad, con énfasis especial en la frescura y el sabor.
    </p>
    <p>
        Vení a disfrutar de una experiencia culinaria única.
        En El Asador, cada comida es un homenaje a la tradición y la innovación.
    </p>
`;
