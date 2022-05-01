const navBtn = document.querySelector('#nav-btn');
const navItems = document.querySelector('#nav');

navBtn.addEventListener('click', (e) => {
  navItems.classList.toggle('nav');
});

const hideNav = () => {
  navItems.classList.remove('nav');
  navItems.classList.add('nav-closed');
};
const linksNav = nav.querySelectorAll('a');
linksNav.forEach((item) => item.addEventListener('click', hideNav));
