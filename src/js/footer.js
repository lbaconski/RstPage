
function render(){
    const footer = `
    <div class="">
        <p>&copy; 2024 El Asador. Todos los derechos reservados.</p>
        <p>Abierto de Lunes a Domingo: 12:00 - 15:00 / 20:00 - 00:00</p>
    </div>`
    
    let footerElement = document.createElement('footer');
   
    footerElement.innerHTML = footer;
    let content = document.getElementById('content');
content.appendChild(footerElement); }

    
    export { render as renderFooter }