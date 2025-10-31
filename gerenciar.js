let tarefas = [
  { id: 1, usuario: "Usuário 1", descricao: "Verificar estoque", setor: "Produção", prioridade: "Alta", status: "a fazer" },
  { id: 2, usuario: "Usuário 2", descricao: "Conferir validade", setor: "Qualidade", prioridade: "Média", status: "fazendo" },
  { id: 3, usuario: "Usuário 1", descricao: "Emitir relatório", setor: "Administrativo", prioridade: "Baixa", status: "pronto" }
];

function exibirTarefas() {
  document.getElementById("aFazer").innerHTML = "<h3>A Fazer</h3>";
  document.getElementById("fazendo").innerHTML = "<h3>Fazendo</h3>";
  document.getElementById("pronto").innerHTML = "<h3>Pronto</h3>";

  tarefas.forEach(t => {
    const div = document.createElement("div");
    div.className = "tarefa";
    div.innerHTML = `
      <p><strong>Descrição:</strong> ${t.descricao}</p>
      <p><strong>Setor:</strong> ${t.setor}</p>
      <p><strong>Prioridade:</strong> ${t.prioridade}</p>
      <p><strong>Usuário:</strong> ${t.usuario}</p>
      <p><strong>Status:</strong> ${t.status}</p>
      <button class="editar" onclick="editarTarefa(${t.id})">Editar</button>
      <button class="excluir" onclick="excluirTarefa(${t.id})">Excluir</button>
      <button class="status" onclick="alterarStatus(${t.id})">Alterar Status</button>
    `;

    if (t.status === "a fazer") document.getElementById("aFazer").appendChild(div);
    else if (t.status === "fazendo") document.getElementById("fazendo").appendChild(div);
    else document.getElementById("pronto").appendChild(div);
  });
}

function editarTarefa(id) {
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    alert("Redirecionando para a tela de cadastro de tarefas com dados preenchidos...");
    window.location.href = `tarefa.html?id=${tarefa.id}`;
  }
}

function excluirTarefa(id) {
  if (confirm("Deseja realmente excluir esta tarefa?")) {
    tarefas = tarefas.filter(t => t.id !== id);
    exibirTarefas();
  }
}

function alterarStatus(id) {
  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) return;

  const proximoStatus = {
    "a fazer": "fazendo",
    "fazendo": "pronto",
    "pronto": "a fazer"
  };

  tarefa.status = proximoStatus[tarefa.status];
  exibirTarefas();
}

exibirTarefas();