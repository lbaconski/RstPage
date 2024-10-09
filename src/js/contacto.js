
function render(){
    const datosContacto = `        <h2>Contacto</h2>

        <div class="">
            <div class="">
                <strong>Dirección:</strong> Av. Wheelwright 1487, S2000 Rosario, Santa Fe, Argentina
            </div>
            <div class="">
                <strong>Teléfono:</strong> +54 341 456-7890
            </div>
            <div class="">
                <strong>Horario de Atención:</strong> Lunes a Domingo: 12:00 - 15:00 / 20:00 - 00:00
            </div>
            <div class="">
                <strong>Email:</strong> contacto@elasadorderosario.com
            </div>
        </div>`
    const formContacto = `        <div class="">
            <form action="/enviar-formulario" method="POST">
                <input type="text" name="nombre" placeholder="Nombre" required class="">
                <input type="email" name="email" placeholder="Email" required class="">
                <input type="text" name="telefono" placeholder="Teléfono" required class="">
                <textarea name="mensaje" rows="5" placeholder="Mensaje" required class=""></textarea>
                <button type="submit" class="">Enviar</button>
            </form>
        </div>`
    const mapContacto = `    <div class="">
            <h3>Ubicación</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d-60.6701234!3d-32.9541234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab12345678!2sAv.%20Wheelwright%201487%2C%20S2000%20Rosario%2C%20Santa%20Fe%2C%20Argentina!5e0!3m2!1ses!2sar!4v1631234567890" allowfullscreen class=""></iframe>
        </div>`
    const socialMediaContacto = `        <div class="">
            <h3>Seguinos en nuestras redes sociales</h3>
            <a href="https://facebook.com/elasadorderosario" target="_blank" class="">Facebook</a>
            <a href="https://instagram.com/elasadorderosario" target="_blank" class="">Instagram</a>
            <a href="https://twitter.com/elasadorderosario" target="_blank" class="">Twitter</a>
        </div>`

    

        let contactoElement = document.createElement('div');
        
        contactoElement.innerHTML = ''
        contactoElement.innerHTML += datosContacto +'<br>'
        contactoElement.innerHTML += formContacto +'<br>'
        contactoElement.innerHTML += mapContacto +'<br>'
        contactoElement.innerHTML += socialMediaContacto 
let content = document.getElementById('content');
content.appendChild(contactoElement); }

export { render as renderContacto};
