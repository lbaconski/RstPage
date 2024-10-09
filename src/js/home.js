
function render(){
    const home= `
        <h1>Bienvenidos a El Asador de Rosario</h1>

        <p>
            Situado en la vera del Río Paraná en la ciudad de Rosario, El Asador es un restaurante donde la cocina a la parrilla se convierte en arte. 
            Cada plato es elaborado con ingredientes de la más alta calidad, con énfasis especial en la frescura y el sabor.
        </p>
        <p>
            Vení a disfrutar de una experiencia culinaria única.
            En El Asador, cada comida es un homenaje a la tradición y la innovación.
        </p>
    `;
    let homeElement = document.createElement('div');
    homeElement.innerHTML = home;
    let content = document.getElementById('content');
    content.appendChild(homeElement); }

export { render as renderHome};
