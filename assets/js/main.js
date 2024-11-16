// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");

    // Função para carregar o footer
    fetch("footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar o footer: " + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            // Insere o conteúdo do footer no final do body
            body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("Erro:", error));
});
