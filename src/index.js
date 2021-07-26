import './sass/main.scss';

import { saveTheme, getTheme } from './js/memory';
import { renderMenu } from './js/render';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchRef = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');

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
