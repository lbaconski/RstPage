
function render(){
    const footer = `
    <div class="container text-center">
        <p>&copy; 2024 El Asador. Todos los derechos reservados.</p>
        <p>Abierto de Lunes a Domingo: 12:00 - 15:00 / 20:00 - 00:00</p>
    </div>`
    
    let footerElement = document.createElement('footer');
   
    footerElement.innerHTML = footer;
    footerElement.classList.add("navbar", "bg-dark", "border-bottom", "border-body", "mt-auto", "text-white-50" )
    let content = document.getElementById('content');
content.appendChild(footerElement); }

    
    export { render as renderFooter }