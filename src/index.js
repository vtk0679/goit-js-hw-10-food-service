import './sass/main.scss';

import menuTemplate from './templates/menu.hbs';
import menuData from './menu.json';

const STORAGE_KEY = 'isDarkTheme';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchRef = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');
const menuRef = document.querySelector('ul.js-menu');

themeSwitchRef.onchange = onThemeChange;

onPageLoad();

function onThemeChange() {
  bodyRef.classList.toggle(Theme.LIGHT);
  bodyRef.classList.toggle(Theme.DARK);
  if (bodyRef.classList.contains(Theme.DARK)) localStorage.setItem(STORAGE_KEY, true);
  else localStorage.setItem(STORAGE_KEY, false);
}

function onPageLoad() {
  if (localStorage.getItem(STORAGE_KEY) === 'true') {
    themeSwitchRef.checked = true;
    bodyRef.classList.add(Theme.DARK);
  } else bodyRef.classList.add(Theme.LIGHT);

  renderMenu();
}

function renderMenu() {
  const markup = menuTemplate(menuData);
  menuRef.innerHTML = markup;
}
