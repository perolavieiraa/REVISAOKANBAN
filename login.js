const usuarios = [
  { id: 1, nome: "Pérola", email: "perola@gmail.com", senha: "123456" }
];

document.getElementById('formLogin').addEventListener('submit', function(e){
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const mensagem = document.getElementById('mensagem');

  mensagem.textContent = '';
  mensagem.className = 'mensagem';

  if (!email || !senha) {
    mensagem.textContent = 'Preencha todos os campos.';
    mensagem.classList.add('erro');
    return;
  }

  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (usuario) {
    mensagem.textContent = 'Login realizado com sucesso!';
    mensagem.classList.add('sucesso');

    localStorage.setItem('user_id', usuario.id);
    localStorage.setItem('user_name', usuario.nome);

    setTimeout(() => {
      window.location.href = 'gerenciar.html';
    }, 1000);
  } else {
    mensagem.textContent = 'E-mail ou senha incorretos.';
    mensagem.classList.add('erro');
  }
});
