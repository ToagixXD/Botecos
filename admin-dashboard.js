document.getElementById("add-jogador-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome-jogador").value;
  const posicao = document.getElementById("posicao-jogador").value;

  // Salvar jogador no localStorage
  let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
  jogadores.push({ nome, posicao, gols: 0, assistencias: 0 });
  localStorage.setItem("jogadores", JSON.stringify(jogadores));

  alert(`Jogador ${nome} adicionado na posição ${posicao}.`);
});

document.getElementById("add-jogo-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const adversario = document.getElementById("adversario").value;
  const data = document.getElementById("data-jogo").value;
  const local = document.getElementById("local").value;

  alert(`Jogo contra ${adversario} no dia ${data}, no local ${local}.`);
  // Aqui você pode salvar os dados do jogo (não estamos fazendo isso no exemplo)
});

document.getElementById("update-estatisticas-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome-estatistica").value;
  const gols = document.getElementById("gols").value;
  const assistencias = document.getElementById("assistencias").value;

  // Recuperar os jogadores do localStorage
  let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
  
  // Encontrar o jogador e atualizar as estatísticas
  let jogadorAtualizado = jogadores.find(jogador => jogador.nome === nome);
  if (jogadorAtualizado) {
    jogadorAtualizado.gols = gols;
    jogadorAtualizado.assistencias = assistencias;
    // Atualizar o localStorage
    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    alert(`Estatísticas de ${nome} atualizadas: ${gols} gols e ${assistencias} assistências.`);
  } else {
    alert(`Jogador não encontrado.`);
  }
});

function carregarJogadores() {
  const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
  const listaJogadores = document.getElementById("jogadores-lista");

  if (jogadores.length > 0) {
    listaJogadores.innerHTML = jogadores.map(jogador => {
      return `
        <div class="jogador">
          <p><strong>${jogador.nome}</strong> (${jogador.posicao})</p>
          <p>Gols: ${jogador.gols}</p>
          <p>Assistências: ${jogador.assistencias}</p>
        </div>
      `;
    }).join("");
  } else {
    listaJogadores.innerHTML = "<p>Nenhum jogador cadastrado.</p>";
  }
}

// Carregar jogadores na página quando carregar o painel
window.onload = carregarJogadores;

document.getElementById("add-jogo-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const adversario = document.getElementById("adversario").value;
  const data = document.getElementById("data-jogo").value;

  // Salvar jogo no localStorage
  let jogos = JSON.parse(localStorage.getItem("jogos")) || [];
  jogos.push({ adversario, data });
  localStorage.setItem("jogos", JSON.stringify(jogos));

  alert(`Jogo contra ${adversario} no dia ${data}.`);
});
  