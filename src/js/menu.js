import choripan from "../img/menu-choripan.jpg";
import tira from "../img/menu-asado-tira.jpg";
import ensalada from "../img/menu-ensalada.jpg";
import fritas from "../img/menu-papas-fritas.jpg";
import parrillada from "../img/menu-parrillada.jpg";
import vacio from "../img/menu-sangcuche-vacio.jpg";

function createMenuItem(title, descr, img, price) {
    return `
      <div class="menu-item">
          <img src="${img}" alt="${title}" class="menu-item-img" />
          <div class="menu-item-text">
              <h3 class="menu-item-heading">
                  <span class="menu-item-name">${title}</span>
                  <span class="menu-item-price">${price}</span>
              </h3>
              <p class="menu-item-desc">${descr}</p>
          </div>
      </div>
    `;
}

function render() {
    const item1Menu = createMenuItem('Choripan', 'Clásico sanguche de chorizo 100% cerdo.', choripan, '$8000');
    const item2Menu = createMenuItem('Asado de Tira', 'Asado de tira carne premium.', tira, '$12000');
    const item3Menu = createMenuItem('Ensalada', 'Ensalada criolla de lechuga, tomate y cebolla', ensalada, '$3500');
    const item4Menu = createMenuItem('Papas fritas', 'Papas fritas bastón crocantes con aderezos a elección', fritas, '$3800');
    const item5Menu = createMenuItem('Parrillada completa', 'Parrillada completa para 2 personas con costilla, vacío, chinchulín, chorizo, molleja y morcilla.', parrillada, '$23000');
    const item6Menu = createMenuItem('Vacío', 'Vacío hecho a la parrilla en cocción lenta. Incluye chimichurri.', vacio, '$15000');
 
    let menuContent = item1Menu + item2Menu + item3Menu + item4Menu + item5Menu + item6Menu;


    let menuWrapped = `
      <div class="menu">
          <h2 class="menu-group-heading">Sugerencias</h2>
          <div class="menu-group">${menuContent}</div>
      </div>
    `;

    let menuElement = document.createElement('div');
    menuElement.innerHTML = menuWrapped;
    let content = document.getElementById('content');
    content.appendChild(menuElement);
}

export { render as renderMenu };
