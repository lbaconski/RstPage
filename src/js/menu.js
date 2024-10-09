import choripan from "../img/menu-choripan.jpg"
import tira from "../img/menu-asado-tira.jpg"
import ensalada from "../img/menu-ensalada.jpg"
import fritas from "../img/menu-papas-fritas.jpg"
import parrillada from "../img/menu-parrillada.jpg"
import vacio from "../img/menu-sangcuche-vacio.jpg"



function render(){

     const tituloMenu = `<h2>Menú</h2>`   
     const item1Menu = `            <div class="">
                <img src="${choripan}" alt="imagen choripan" class="">
                <h3>Choripan</h3>
                <p>Clásico sanguche de chorizo 100% cerdo.</p>
                <p><strong>Precio:</strong> $10000</p>
            </div>`   
     const item2Menu = `            <div class="">
                <img src="${tira}" alt="Imagen asado de tira" class="">
                <h3>Asado de Tira</h3>
                <p>Asado de tira carne premium.</p>
                <p><strong>Precio:</strong> $12000</p>
            </div>`   
     const item3Menu = `          <div class="">
                <img src="${ensalada}" alt="Imagen ensalada" class="">
                <h3>Ensalada/h3>
                <p>Ensalada criolla de lechuga, tomate y cebolla</p>
                <p><strong>Precio:</strong> $3500</p>
            </div>`   
     const item4Menu = `

            <div class="">
                <img src="${fritas}" alt="Imagen papas fritas" class="">
                <h3>Papas fritas</h3>
                <p>Papas fritas bastón crocantes con aderezos a elección</p>
                <p><strong>Precio:</strong> $3800</p>
            </div>`   
     const item5Menu = `          <div class="">
                <img src="${parrillada}" alt="Imagen de parrillada" class="">
                <h3>Parrillada completa</h3>
                <p>Parrillada completa para 2 personas con costilla, vacio, chinchulin, chorizo, molleja y morcilla./p>
                <p><strong>Precio:</strong> $23000</p>
            </div>
`   
     const item6Menu = `  
            <div class="">
                <img src="${vacio}" alt="Imagen vacio asado class="">
                <h3>Vacío</h3>
                <p>Vacio hecho a la parrilla en cocción lenta. Incluye chimichurri./p>
                <p><strong>Precio:</strong> $15000</p>
            </div>
        </div>
`   


let menuElement = document.createElement('div');


menuElement.innerHTML = ''
menuElement.innerHTML += tituloMenu +'<br>'
menuElement.innerHTML += item1Menu +'<br>'
menuElement.innerHTML += item2Menu +'<br>'
menuElement.innerHTML += item3Menu +'<br>'
menuElement.innerHTML += item4Menu +'<br>'
menuElement.innerHTML += item5Menu +'<br>'
menuElement.innerHTML += item6Menu +'<br>'
let content = document.getElementById('content');

content.appendChild(menuElement); }


export { render as renderMenu};
