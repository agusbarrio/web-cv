const navbar = () => {
  document.addEventListener('click', (e) => {
    if (
      e.target.matches('.nav-link') ||
      e.target.matches('.navbar-brand') ||
      e.target.matches('.navbar-brand *')
    ) {
      document.querySelector('.navbar-collapse').classList.remove('show');
      document.querySelector('.navbar-toggler').classList.add('collapsed');
      document.querySelector('.navbar-toggler').ariaExpanded = false;
    }
  });
};

export default navbar;
