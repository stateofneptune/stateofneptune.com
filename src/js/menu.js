const menu = document.querySelector('#menu');
const menuBackdrop = document.querySelector('#menu-backdrop');
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

function mount() {
  if (menuOpenButton) {
    menuOpenButton.addEventListener('click', openMenu);
  }

  if (menuCloseButton) {
    menuCloseButton.addEventListener('click', closeMenu);
  }

  if (menuBackdrop) {
    menuBackdrop.addEventListener('click', closeMenu);
  }
}

function openMenu() {
  menu.dataset.menuOpen = 'true';
  menuBackdrop.dataset.menuOpen = 'true';
  menuOpenButton.dataset.menuOpen = 'true';
  menuCloseButton.dataset.menuOpen = 'true';
  document.body.dataset.menuOpen = 'true'
}

function closeMenu() {
  menu.dataset.menuOpen = 'false';
  menuBackdrop.dataset.menuOpen = 'false';
  menuOpenButton.dataset.menuOpen = 'false';
  menuCloseButton.dataset.menuOpen = 'false';
  document.body.dataset.menuOpen = 'false'
}

export { mount };
