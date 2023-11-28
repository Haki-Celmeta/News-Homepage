const hamMenu = document.querySelector('#hamburger-menu');
const closeMenu = document.querySelector('#close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileListMenu = document.querySelectorAll('.mobile-menu ul li');
let isOpen = false;

hamMenu.addEventListener('click', showHamburgerMenu);

closeMenu.addEventListener('click', hideHamburgerMenu);

document.body.addEventListener('click', (e) => {
  if (isOpen) {
    if (e.target !== mobileMenu && e.target !== hamMenu && e.target.tagName !== 'LI') hideHamburgerMenu();
  }
});

function hideHamburgerMenu() {
  mobileMenu.style.display = 'none';
  closeMenu.style.display = 'none';
  hamMenu.style.display = 'block';
  isOpen = false;
}

function showHamburgerMenu() {
  mobileMenu.style.display = 'block';
  closeMenu.style.display = 'block';
  isOpen = true;
}