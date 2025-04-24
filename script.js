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


  const username = "ca2sy"; 
  const lista = document.getElementById("repositorios-lista");

  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
      repos.forEach(repo => {
        const a = document.createElement("a");
        a.href = repo.html_url;
        a.target = "_blank";
        a.className = "repositorio-item";
        a.innerHTML = `
          <img src="https://i.pinimg.com/736x/da/00/f9/da00f973a0f78acb10af5c0b8fed8b1b.jpg" alt="GitHub" class="repositorio-icon">
          <br>
          <span>${repo.name}</span>
        `;
        lista.appendChild(a);
      });
    })
    .catch(error => {
      console.error("Erro ao buscar repositórios:", error);
      lista.innerHTML = "<p>Não foi possível carregar os repositórios.</p>";
    });
