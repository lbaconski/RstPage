
function render(){
    const footer = `
    <div class="footer-content">
        <div class="footer-about">
            <p>No trabajamos con reservas. Abierto de Lunes a Domingo: 12:00 - 15:00 / 20:00 - 00:00</p>
        </div>
           <div class="footer-bottom">
       <p> &copy; 2024 El Asador | All Rights Reserved</p>
    </div>
        </div>`
    
    let footerElement = document.createElement('footer');
   
    footerElement.innerHTML = footer;
    footerElement.classList.add("footer")
    let content = document.getElementById('content');
content.appendChild(footerElement); }

    
    export { render as renderFooter }