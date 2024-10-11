    function render() {
        const datosContacto = `
            <div class="contact-details">
                <div class="contact-item">
                    Dirección: Av. Wheelwright 1487, S2000 Rosario, Santa Fe, Argentina
                    Teléfono: +54 341 456-7890
                    Horario de Atención: Lunes a Domingo: 12:00 - 15:00 / 20:00 - 00:00
                    Email: contacto@elasadorderosario.com
                </div>
            </div>`;

        const formContacto = `
            <div class="contact-form">
                <form action="/enviar-formulario" method="POST">
                    <input type="text" name="nombre" placeholder="Nombre" required class="input-field"><br>
                    <input type="email" name="email" placeholder="Email" required class="input-field"><br>
                    <input type="text" name="telefono" placeholder="Teléfono" required class="input-field"><br>
                    <textarea name="mensaje" rows="5" placeholder="Mensaje" required class="textarea-field"></textarea><br>
                    <button type="submit" class="submit-button">Enviar</button>
                </form>
            </div>`;

        const mapContacto = `
    
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d-60.6701234!3d-32.9541234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab12345678!2sAv.%20Wheelwright%201487%2C%20S2000%20Rosario%2C%20Santa%20Fe%2C%20Argentina!5e0!3m2!1ses!2sar!4v1631234567890" allowfullscreen class="iframe-map"></iframe>
        `;


   
        let contactoElement = document.createElement('div');
        contactoElement.classList.add('contact-wrap')
        
        contactoElement.innerHTML = '';
   
        contactoElement.innerHTML += formContacto
        contactoElement.innerHTML += mapContacto
        contactoElement.innerHTML += datosContacto 

        let content = document.getElementById('content');
        content.appendChild(contactoElement);
    }

export { render as renderContacto };
