// Função para carregar os jogadores
function carregarJogadores() {
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
    const listaJogadores = document.getElementById("lista-jogadores");
  
    if (!jogadores || jogadores.length === 0) {
      listaJogadores.innerHTML = "<p>Não há jogadores na equipe.</p>";
      return;
    }
  
    let htmlContent = "";
    jogadores.forEach((jogador, index) => {
      htmlContent += `
        <div class="jogador">
          <p><strong>${jogador.nome}</strong> (${jogador.posicao})</p>
          <p><strong>Gols:</strong> ${jogador.gols}</p>
          <p><strong>Assistências:</strong> ${jogador.assistencias}</p>
          <button onclick="excluirJogador(${index})">Excluir</button>
        </div>
      `;
    });
  
    listaJogadores.innerHTML = htmlContent;
  }
  
  // Função para excluir jogador
  function excluirJogador(index) {
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
    jogadores.splice(index, 1); // Remove o jogador do array
    localStorage.setItem("jogadores", JSON.stringify(jogadores)); // Atualiza o localStorage
    carregarJogadores(); // Recarrega os jogadores
  }
  
  // Função para carregar os jogos
  function carregarJogos() {
    const jogos = JSON.parse(localStorage.getItem("jogos")) || [];
    const listaJogos = document.getElementById("lista-jogos");
  
    if (!jogos || jogos.length === 0) {
      listaJogos.innerHTML = "<p>Não há jogos agendados.</p>";
      return;
    }
  
    let htmlContent = "";
    jogos.forEach((jogo, index) => {
      htmlContent += `
        <div class="jogo">
          <p><strong>${jogo.timeCasa} vs ${jogo.timeVisitante}</strong></p>
          <p><strong>Data:</strong> ${jogo.data}</p>
          <p><strong>Local:</strong> ${jogo.local}</p>
          <button onclick="excluirJogo(${index})">Excluir</button>
        </div>
      `;
    });
  
    listaJogos.innerHTML = htmlContent;
  }
  
  // Função para excluir jogo
  function excluirJogo(index) {
    const jogos = JSON.parse(localStorage.getItem("jogos")) || [];
    jogos.splice(index, 1); // Remove o jogo do array
    localStorage.setItem("jogos", JSON.stringify(jogos)); // Atualiza o localStorage
    carregarJogos(); // Recarrega os jogos
  }
  
  // Carregar as informações ao abrir a página
  window.onload = function() {
    carregarJogadores();
    carregarJogos();
  }
  