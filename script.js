document.getElementById("formUsuario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem");

  mensagem.textContent = "";
  mensagem.className = "";

  if (nome === "" || email === "") {
    mensagem.textContent = "Preencha todos os campos!";
    mensagem.classList.add("erro");
    return;
  }

  mensagem.textContent = "Cadastro concluído com sucesso";
  mensagem.classList.add("sucesso");
  document.getElementById("formUsuario").reset();
});