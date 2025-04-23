// Mostrar menu ao rolar
window.addEventListener('scroll', () => {
    const menu = document.querySelector('.menu');
    if (window.scrollY > window.innerHeight * 0.8) {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  });
  
  // Animação ao aparecer na tela
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });