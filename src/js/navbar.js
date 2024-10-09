function renderNav(){
const nav = `
    <nav class="nav nav-masthead justify-content-center float-md-end">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">El Asador</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#" id="home-btn">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="menu-btn">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="about-btn">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`

const navElement = document.createElement('header');
navElement.innerHTML = nav;
navElement.classList.add("navbar", "bg-dark", "border-bottom", "border-body","mb-auto" )
let content = document.getElementById('content');
content.appendChild(navElement); }

export { renderNav }