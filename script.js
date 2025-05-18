// ===== Modais das páginas =====
function abrirDescricao(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'block';
  }
  function fecharDescricao(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  }
  window.onclick = function(event) {
    document.querySelectorAll('.modal-desc').forEach(function(modal) {
      if(event.target === modal) {
        modal.style.display = "none";
      }
    });
  };