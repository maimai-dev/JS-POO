export default class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    criarPerfil(nome, email, nascimento){
        return `seu perfil com esses dados foi criado com sucesso:
        ${this.nome}
        ${this.email}
        ${this.nascimento}.`
    }

    apagarPerfil(email){
        return `Seu perfil com o email: ${this.email} foi deletado.`
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }

    exibirListaCursos(){
        return `Java, JavaScript, GO, PHP, Python`
    }

    matricularEmCurso(estudante, curso){
        return `Parabéns ${estudante}! Você se matriculou com sucesso no curso ${curso}!`
    }

    exibirCursosMatriculados(curso1, curso2, curso3){
        return `Você está matriculado nos cursos ${curso1}, ${curso2}, ${curso3}`
    }

}

const novoUser = new User('Maiara', 'm@m.com', '08/12/2002')

//console.log(novoUser);
//console.log(novoUser.exibirInfos());

//console.log(User.prototype.isPrototypeOf(novoUser));
