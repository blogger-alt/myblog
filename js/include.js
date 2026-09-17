function loadPartial(id, url) {
  var el = document.getElementById(id);
  if (!el) return;
  fetch(url)
    .then(function(res) {
      if (!res.ok) throw new Error('Failed to load ' + url);
      return res.text();
    })
    .then(function(data) {
      el.innerHTML = data;
      highlightActiveNav();
    })
    .catch(function(err) {
      console.error(err);
    });
}
function highlightActiveNav() {
  var path = window.location.pathname;
  var links = document.querySelectorAll('.top-nav-links a');
  links.forEach(function(link) {
    var href = link.getAttribute('href');
    link.classList.remove('active');
    if (href === path || (href !== '/' && path.startsWith(href))) {
      link.classList.add('active');
    }
    if (href === '/' && path === '/') {
      link.classList.add('active');
    }
  });
}
// ─── Scroll Reveal ───
function initReveal() {
  var elements = document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-left, .stagger');
  if (!elements.length) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  elements.forEach(function(el) {
    observer.observe(el);
  });
}
// ─── Smooth entry on page load ───
function initPageEntry() {
  var heroReveals = document.querySelectorAll('.hero-reveal');
  heroReveals.forEach(function(el, i) {
    setTimeout(function() {
      el.classList.add('visible');
    }, 100 + (i * 120));
  });
}
loadPartial("header-placeholder", "/partials/header.html");
loadPartial("footer-placeholder", "/partials/footer.html");
// Init animations after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    initReveal();
    initPageEntry();
  }, 200);
});