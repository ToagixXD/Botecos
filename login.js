const adminUsername = "admin";
const adminPassword = "senha123"; // Mudar quando necessário

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === adminUsername && password === adminPassword) {
    // Login bem-sucedido, redirecionar para o painel
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Nome de usuário ou senha incorretos.");
  }
});
