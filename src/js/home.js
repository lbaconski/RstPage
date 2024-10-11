
function render(){
    const home= `
        <h1>Bienvenidos a El Asador de Rosario</h1><br><br>

        <p>
            Situado en la vera del Río Paraná en la ciudad de Rosario, El Asador es un restaurante donde la cocina a la parrilla se convierte en arte. 
             <p>  Cada plato es elaborado con ingredientes de la más alta calidad, con énfasis especial en la frescura y el sabor.  </p><br>
        </p><br>
        <p>
            Vení a disfrutar de una experiencia culinaria única.   </p><br>
             <p>  En El Asador, cada comida es un homenaje a la tradición y la innovación.
        </p><br>
    `;
    let homeElement = document.createElement('div');
    homeElement.classList.add('content-wrap')
    homeElement.innerHTML = home;
    let content = document.getElementById('content');
    content.appendChild(homeElement); }

export { render as renderHome};
