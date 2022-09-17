const mobileMenu = document.getElementById('mobile-menu');
const body = document.querySelector('.body');
const menuItemZero = document.querySelector('.mobile-menu-item-0');
const menuItemOne = document.querySelector('.mobile-menu-item-1');
const menuItemTwo = document.querySelector('.mobile-menu-item-2');
const menuItemThree = document.querySelector('.mobile-menu-item-3');
const meunuIcon = document.querySelector('.menu-container');

// eslint-disable-next-line no-unused-vars
function toggleMenu(x) {
  x.classList.toggle('change');
  mobileMenu.classList.toggle('mobile-menu');
  mobileMenu.classList.toggle('displayNone');
  body.classList.toggle('overflow-hidden');
}

function revertChanges() {
  meunuIcon.classList.remove('change');
  mobileMenu.classList.remove('mobile-menu');
  mobileMenu.classList.add('displayNone');
  body.classList.remove('overflow-hidden');
}

menuItemZero.onclick = (() => {
  revertChanges();
  return true;
});

menuItemOne.onclick = (() => {
  revertChanges();
  return true;
});

menuItemTwo.onclick = (() => {
  revertChanges();
  return true;
});

menuItemThree.onclick = (() => {
  revertChanges();
  return true;
});