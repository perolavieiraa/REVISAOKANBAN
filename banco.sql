CREATE DATABASE industria;
USE industria;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE
);

CREATE TABLE tarefas (
    id_tarefa INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    descricao TEXT NOT NULL,
    setor VARCHAR(100) NOT NULL,
    prioridade ENUM('Baixa', 'Média', 'Alta') NOT NULL,
    data_cadastro DATE NOT NULL,
    status ENUM('A Fazer', 'Fazendo', 'Pronto') DEFAULT 'A Fazer',
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);