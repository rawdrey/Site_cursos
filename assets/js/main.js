// main.js
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada e pronta para interagir.");
    <script>
    function pesquisarCursos() {
        const pesquisa = document.getElementById("pesquisar").value.toLowerCase();
        const cursos = document.querySelectorAll(".curso");
        
        cursos.forEach(curso => {
            const titulo = curso.querySelector("p").textContent.toLowerCase();
            if (titulo.includes(pesquisa)) {
                curso.style.display = "block";  // Exibe o curso
            } else {
                curso.style.display = "none";  // Oculta o curso
            }
        });
    }
</script>
});
  