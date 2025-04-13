// Função para carregar e filtrar as estatísticas dos jogadores
function carregarEstatisticas() {
  const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
  const listaEstatisticas = document.getElementById("lista-estatisticas");
  const filtroGols = document.getElementById("filtro-gols").value;
  const filtroAssistencias = document.getElementById("filtro-assistencias").value;

  // Filtra os jogadores com base nos filtros
  const jogadoresFiltrados = jogadores.filter(jogador => {
    let filtroValido = true;
    if (filtroGols && jogador.gols < filtroGols) {
      filtroValido = false;
    }
    if (filtroAssistencias && jogador.assistencias < filtroAssistencias) {
      filtroValido = false;
    }
    return filtroValido;
  });

  // Exibe os jogadores filtrados
  if (jogadoresFiltrados.length > 0) {
    listaEstatisticas.innerHTML = jogadoresFiltrados.map(jogador => {
      return `
        <div class="estatisticas-jogador">
          <p><strong>${jogador.nome}</strong> (${jogador.posicao})</p>
          <p><strong>Gols:</strong> ${jogador.gols}</p>
          <p><strong>Assistências:</strong> ${jogador.assistencias}</p>
        </div>
      `;
    }).join("");
  } else {
    listaEstatisticas.innerHTML = "<p>Não há jogadores que atendem ao filtro.</p>";
  }
}

// Carregar estatísticas e aplicar filtro quando a página for carregada
window.onload = carregarEstatisticas;

// Atualizar a lista sempre que o filtro mudar
document.getElementById("filtro-gols").addEventListener("input", carregarEstatisticas);
document.getElementById("filtro-assistencias").addEventListener("input", carregarEstatisticas);
