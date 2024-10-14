export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome(){
        return this.#nome
    }

    get email(){
        return this.#email
    }

    get nascimento(){
        return this.#nascimento
    }

    get role(){
        return this.#role
    }

    get ativo(){
        return this.#ativo
    }


    criarPerfil(nome, email, nascimento){
        return `seu perfil com esses dados foi criado com sucesso:
        ${this.#nome}
        ${this.#email}
        ${this.#nascimento}.`
    }

    apagarPerfil(email){
        return `Seu perfil com o email: ${this.#email} foi deletado.`
    }


    exibirInfos(){
        if(this.role === 'estudante'){
            return `dados estudante: ${this.#nome}`
        }
        if (this.role === 'admin'){
            return `dados admin: ${this.#nome}, ${this.role}`
        }
        if(this.role === 'docente'){
            return `dados docente: ${this.#nome}, ${this.email}`
        }
    }

    static exibirInfosGenericas(nome, email){
        return `${nome}, ${email}`
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
