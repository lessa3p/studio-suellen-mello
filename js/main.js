// Menu mobile toggle
const menuToggle = document.getElementById('menuToggle');
const navMobile = document.getElementById('navMobile');

if (menuToggle && navMobile) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Só um accordion aberto por vez
document.querySelectorAll('.accordion .acc-item').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.accordion .acc-item').forEach(other => {
        if (other !== item) other.removeAttribute('open');
      });
    }
  });
});

// Ano no rodapé
const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();

// Header some ao rolar pra baixo, volta ao rolar pra cima
let lastScroll = 0;
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (header) {
    header.style.transform = (current > lastScroll && current > 120) ? 'translateY(-100%)' : 'translateY(0)';
  }
  lastScroll = current;
});
