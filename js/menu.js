(() => {
  const menu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const menuNavBtns = document.querySelectorAll('.menu-btn');

  const openMenu = () => {
    openMenuBtn.setAttribute('aria-expanded', 'true');
    menu.classList.toggle('is-open');
  };

  const closeMenu = () => {
    openMenuBtn.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  };

  openMenuBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', closeMenu);
  menuNavBtns.forEach(btn => {
    btn.addEventListener('click', closeMenu)
  });
  document.body.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target) || openMenuBtn.contains(event.target);
    if (!isClickInsideMenu) closeMenu();
  });
})();