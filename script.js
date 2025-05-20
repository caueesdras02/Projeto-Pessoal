// ===== Modais das páginas =====
// Use se quiser modais de descrição em outras páginas
function abrirDescricao(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'block';
}
function fecharDescricao(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
}

// ===== Modal estilo Netflix para a galeria =====
/*
  NÃO MUDE!
  - Use abrirGaleriaModal(imagem, titulo, fichaHTML) nos seus cartões.
  - O parâmetro fichaHTML pode usar <ul class='ficha-tecnica'>...</ul> para linhas separadas.
*/
function abrirGaleriaModal(imgSrc, titulo, texto) {
    document.getElementById('galeriaModalImg').src = imgSrc;
    document.getElementById('galeriaModalImg').alt = titulo;
    document.getElementById('galeriaModalTitulo').textContent = titulo;
    document.getElementById('galeriaModalTexto').innerHTML = texto; // ATENÇÃO: innerHTML para mostrar HTML
    document.getElementById('galeriaModal').style.display = 'flex';
}
function fecharGaleriaModal() {
    document.getElementById('galeriaModal').style.display = 'none';
}

// Fechar modal ao clicar fora do conteúdo (modal Netflix ou modais antigos)
window.onclick = function(event) {
    // Fecha o modal da galeria se clicar fora dele
    const modalGaleria = document.getElementById('galeriaModal');
    if (modalGaleria && event.target === modalGaleria) {
        fecharGaleriaModal();
    }
    // Fecha outros modais antigos, se existirem
    document.querySelectorAll('.modal-desc').forEach(function(modal) {
      if(event.target === modal) {
        modal.style.display = "none";
      }
    });
};

// ===== Carregamento de páginas e destaque da galeria =====
/*
  NÃO MUDE!
  - Para carregar páginas automaticamente pelo menu.
  - Para destacar foto da galeria ao carregar com id.
*/
function carregarPagina(pagina, fotoId) {
    fetch(pagina)
      .then(resp => resp.text())
      .then(html => {
        document.getElementById('conteudo').innerHTML = html;
        window.scrollTo(0, 0);
        // Se veio o id da foto, rola até ela e destaca
        if (fotoId) {
          setTimeout(() => {
            const el = document.getElementById(fotoId);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
              el.classList.add('destaque-galeria');
              setTimeout(() => el.classList.remove('destaque-galeria'), 1800);
            }
          }, 100); // espera o HTML ser inserido
        }
      });
}

// ===== Carregar página inicial automaticamente =====
window.onload = () => carregarPagina('home.html');