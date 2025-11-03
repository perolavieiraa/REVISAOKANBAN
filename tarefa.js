document.getElementById("formTarefa").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  const setor = document.getElementById("setor").value.trim();
  const prioridade = document.getElementById("prioridade").value;
  const status = document.getElementById("status").value;
  const mensagem = document.getElementById("mensagem");

  mensagem.textContent = "";
  mensagem.className = "";

  if (!usuario || !descricao || !setor || !prioridade || !status) {
    mensagem.textContent = "Preencha todos os campos!";
    mensagem.classList.add("erro");
    return;
  }

  mensagem.textContent = "Cadastro concluído com sucesso";
  mensagem.classList.add("sucesso");
  document.getElementById("formTarefa").reset();
  document.getElementById("status").value = "a fazer";
});