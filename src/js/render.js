import menuTemplate from '../templates/menu.hbs';
import menuData from '../menu.json';

export function renderMenu() {
  const menuRef = document.querySelector('ul.js-menu');
  const markup = menuTemplate(menuData);
  menuRef.innerHTML = markup;
}
