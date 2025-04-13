

// Função para carregar e organizar os jogadores por posição
function carregarEquipa() {
  const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
  const listaEquipa = document.getElementById("lista-jogadores");

  // Organizar os jogadores por posição
  const posicoes = ["Guarda-Redes", "Defesa","Lateral", "Medio","Extremo", "Avançado"];
  const jogadoresOrganizados = {};

  // Inicializar os grupos por posição
  posicoes.forEach(posicao => jogadoresOrganizados[posicao] = []);

  // Agrupar jogadores por posição
  jogadores.forEach(jogador => {
    if (jogador.posicao && jogadoresOrganizados[jogador.posicao]) {
      jogadoresOrganizados[jogador.posicao].push(jogador);
    }
  });

  // Exibir jogadores organizados por posição
  let htmlContent = "";
  posicoes.forEach(posicao => {
    if (jogadoresOrganizados[posicao].length > 0) {
      htmlContent += `<h3>${posicao}</h3>`;
      htmlContent += jogadoresOrganizados[posicao].map(jogador => {
        return `
          <div class="jogador">
            <p><strong>${jogador.nome}</strong> (${jogador.posicao})</p>
            <p><strong>Gols:</strong> ${jogador.gols}</p>
            <p><strong>Assistências:</strong> ${jogador.assistencias}</p>
          </div>
        `;
      }).join("");
    }
  });

  listaEquipa.innerHTML = htmlContent || "<p>Não há jogadores na equipe.</p>";
}

// Carregar os jogadores organizados quando a página for carregada
window.onload = carregarEquipa;
