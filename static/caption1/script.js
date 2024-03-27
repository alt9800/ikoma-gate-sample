window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.pageYOffset > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});