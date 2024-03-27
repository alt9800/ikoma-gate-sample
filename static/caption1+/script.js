window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.pageYOffset > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Scroll-driven Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('#title-section, #image-section, #description-section');
hiddenElements.forEach((el) => observer.observe(el));