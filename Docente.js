import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso){
        return `Estudante ${estudante} passou no curso de ${curso}, responsável pelo curso ${this.nome}`
    }

    reprovarEstudante(estudante, curso){
        return `Estudante ${estudante} reprovou no curso de ${curso}, responsável pelo curso ${this.nome}`
    }
}

// const novaDocente = new Docente ('Ana', 'a@a.com', '23/07/2022') 
// console.log(novaDocente.aprovarEstudante('Roberta', 'JavaScript'));
