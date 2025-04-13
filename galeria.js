function abrirModal(elemento) {
    const modal = document.getElementById('modal');
    const modalImagem = document.getElementById('modal-imagem');
    
    modal.style.display = 'flex';
    modalImagem.src = elemento.querySelector('img').src;
  }
  
  function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  