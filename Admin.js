import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, qtdVagas){
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas.`
    }

    excluirCurso(curso){
        return `O curso: ${curso} foi excluido!`
    }
    
    desativarPerfil(perfil){
        return `O perfil: ${perfil} foi excluido!`
    }
}

const novoAdmin = new Admin ('Juliana', 'j@j.com', '24/09/2024')
console.log(novoAdmin);
console.log(novoAdmin.criarCurso('JavaScript', 20));


