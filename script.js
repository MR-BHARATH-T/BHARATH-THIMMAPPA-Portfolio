// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-out-quart',
  once: true, // animate only once
});

// Set dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling offset (handles fixed navbar)
document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    const navOffset = 72; // should match body padding-top
    const top = target.getBoundingClientRect().top + window.pageYOffset - navOffset + 6;
    window.scrollTo({ top, behavior: 'smooth' });
    // collapse mobile menu if open
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});

// Scrollspy active link handling (bootstrap auto-updates; ensure refresh after DOM loaded)
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#mainNavbar',
  offset: 80
});

// Optional: keyboard accessibility - close modals with Escape is default by bootstrap

// Optional small enhancement: add small animation class when skill icons are visible
const skillCards = document.querySelectorAll('.skill-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.35 });

skillCards.forEach(card => observer.observe(card));
