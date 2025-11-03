function verificarSessao() {
    const userId = localStorage.getItem("user_id");
    const userName = localStorage.getItem("user_name");
    const usuario = userId && userName ? { id: userId, nome: userName } : null;
    const pagina = window.location.pathname.split("/").pop();


    if (usuario && pagina === "login.html") {
        return window.location.href = "gerenciar.html";
    }
}

function mostrarUsuarioAtivo() {
    const userId = localStorage.getItem("user_id");
    const userName = localStorage.getItem("user_name");
    const usuario = userId && userName ? { id: userId, nome: userName } : null;
    if (!usuario) return;

    const barra = document.createElement("div");
    barra.classList.add("barra-usuario");

    const nome = document.createElement("span");
    nome.textContent = `Usuário logado: ${usuario.nome}`;

    const btnLogout = document.createElement("button");
    btnLogout.textContent = "Logout";
    btnLogout.onclick = () => {
        if (confirm("Deseja realmente sair da sessão?")) logout();
    };

    barra.append(nome, btnLogout);
    document.body.prepend(barra);
    document.body.classList.add("com-barra");
}

function logout() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    alert("Sessão encerrada!");
    window.location.href = "login.html";
}

window.addEventListener("DOMContentLoaded", () => {
    verificarSessao();
    mostrarUsuarioAtivo();
});
