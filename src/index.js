import './sass/main.scss';

import menuTemplate from './templates/menu.hbs';
import menuData from './menu.json';

const STORAGE_KEY = 'Theme';
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
  if (bodyRef.classList.contains(Theme.DARK)) {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    saveTheme('LIGHT');
  } else {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    saveTheme('DARK');
  }
}

function onPageLoad() {
  const currTheme = getTheme();
  if (currTheme === 'DARK') {
    themeSwitchRef.checked = true;
    bodyRef.classList.add(Theme.DARK);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    if (!currTheme) saveTheme('LIGHT');
  }

  renderMenu();
}

function renderMenu() {
  const markup = menuTemplate(menuData);
  menuRef.innerHTML = markup;
}

function saveTheme(theme) {
  localStorage.setItem(STORAGE_KEY, theme);
}

function getTheme() {
  return localStorage.getItem(STORAGE_KEY);
}
