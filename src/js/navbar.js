function renderNav(){
const nav = `
    <nav class="">
        <div class="">
            <a class="" href="#">El Asador</a>
            <button class="" type="button">
                <span class="></span>
            </button>
            <div class=" id="navbarNav">
                <ul class="">
                    <li class="nav-item">
                        <a class="" href="#" id="home-btn">Home</a>
                    </li>
                    <li class=">
                        <a class="" href="#" id="menu-btn">Menu</a>
                    </li>
                    <li class="">
                        <a class="" href="#" id="about-btn">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`

const navElement = document.createElement('header');
navElement.innerHTML = nav;
navElement.classList.add( )
let content = document.getElementById('content');
content.appendChild(navElement); }

export { renderNav }