document.addEventListener("DOMContentLoaded", function () {
  // Carregar o menu
  fetch("assets/js/includes/menu.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("header").innerHTML = data;
    })
    .catch(error => console.error("Erro ao carregar o menu:", error));

  // Carregar o footer
  fetch("assets/js/includes/footer.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("footer").innerHTML = data;
    })
    .catch(error => console.error("Erro ao carregar o footer:", error));
});
