function loadPartial(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadPartial("header-placeholder", "/partials/header.html");
loadPartial("footer-placeholder", "/partials/footer.html");