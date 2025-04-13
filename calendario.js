function mostrarDetalhes(elemento) {
    const detalhes = elemento.querySelector('.detalhes');
    detalhes.style.display = detalhes.style.display === 'block' ? 'none' : 'block';
  }

  function carregarJogos() {
    const jogos = JSON.parse(localStorage.getItem("jogos")) || [];
    const listaJogos = document.getElementById("lista-jogos");
  
    if (jogos.length > 0) {
      listaJogos.innerHTML = jogos.map(jogo => {
        return `
          <div class="jogo">
            <p><strong>Adversário:</strong> ${jogo.adversario}</p>
            <p><strong>Data:</strong> ${jogo.data}</p>
            <p><strong>Local:</strong> ${jogo.local}</p>
          </div>
        `;
      }).join("");
    } else {
      listaJogos.innerHTML = "<p>Não há jogos agendados.</p>";
    }
  }
  
  // Carregar jogos quando a página for carregada
  window.onload = carregarJogos;