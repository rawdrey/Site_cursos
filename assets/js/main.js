document.addEventListener("DOMContentLoaded", () => {
    // Atualizar automaticamente o ano no rodapé
    const anoAtual = new Date().getFullYear();
    document.getElementById("ano-atual").textContent = anoAtual;
  });
  