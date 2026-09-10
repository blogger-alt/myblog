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
      // Set active nav link based on current page
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
    if (href === path || (href !== '/' && path.startsWith(href))) {
      link.classList.add('active');
    }
  });
}

loadPartial("header-placeholder", "/partials/header.html");
loadPartial("footer-placeholder", "/partials/footer.html");