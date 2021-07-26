const STORAGE_KEY = 'Theme';

export function saveTheme(theme) {
  localStorage.setItem(STORAGE_KEY, theme);
}

export function getTheme() {
  return localStorage.getItem(STORAGE_KEY);
}
