const navbar = (button, links, homeLink, menu) => {
  const $button = document.querySelector(button),
    $menu = document.querySelector(menu);

  document.addEventListener('click', (e) => {
    if (e.target.matches(button) || e.target.matches(`${button} *`)) {
      $button.classList.toggle('is-active');
    }
    if (
      e.target.matches(links) ||
      e.target.matches(`${links} *`) ||
      e.target.matches(homeLink) ||
      e.target.matches(`${homeLink} *`)
    ) {
      $menu.classList.remove('show');
      $button.classList.add('collapsed');
      $button.classList.remove('is-active');
      $button.ariaExpanded = false;
    }
  });
};

export default navbar;
