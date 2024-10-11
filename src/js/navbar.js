function renderNav(){
const nav = `
    <nav class="navbar">
    
       
                <ul class="nav-links">
                    <li >
                        <a href="#" id="home-btn">Home</a>
                    </li>
                    <li >
                        <a  href="#" id="menu-btn">Menu</a>
                    </li>
                    <li>
                        <a  href="#" id="contact-btn">Contacto</a>
                    </li>
                </ul>

    </nav>`

const navElement = document.createElement('header');
navElement.innerHTML = nav;
let content = document.getElementById('content');
content.appendChild(navElement); }

export { renderNav }