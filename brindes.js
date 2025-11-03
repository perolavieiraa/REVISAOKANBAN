const botaoBuscar = document.getElementById("buscarCep");
const botaoAtribuir = document.getElementById("atribuirBrinde");
const enderecoDiv = document.getElementById("endereco");
const mensagem = document.getElementById("mensagem");

botaoBuscar.addEventListener("click", async () => {
    const cep = document.getElementById("cep").value.trim().replace(/\D/g, '');

    if (!cep) {
        enderecoDiv.textContent = "Digite um CEP válido.";
        enderecoDiv.style.color = "red";
        return;
    }

    enderecoDiv.textContent = "Buscando endereço...";

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            enderecoDiv.textContent = "CEP não encontrado.";
            enderecoDiv.style.color = "red";
        } else {
            enderecoDiv.style.color = "black";
            enderecoDiv.textContent = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        }
    } catch (error) {
        enderecoDiv.textContent = "Erro ao buscar o CEP.";
        enderecoDiv.style.color = "red";
    }
});

botaoAtribuir.addEventListener("click", () => {
    const funcionario = document.getElementById("funcionario").value;
    const brinde = document.getElementById("brinde").value;
    const endereco = enderecoDiv.textContent;

    if (funcionario === "" || brinde === "" || endereco === "" || endereco.includes("CEP não encontrado") || endereco.includes("Erro")) {
        mensagem.style.display = "block";
        mensagem.className = "mensagem erro";
        mensagem.textContent = "Preencha todos os campos corretamente e busque o CEP do funcionário.";
    } else {
        mensagem.style.display = "block";
        mensagem.className = "mensagem sucesso";
        mensagem.textContent = `Brinde "${brinde}" atribuído com sucesso ao funcionário ${funcionario}, que receberá em: ${endereco}`;
    }
});
