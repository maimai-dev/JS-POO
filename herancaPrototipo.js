const user = {
    nome: 'Maiara',
    email: 'm@m.com',
    nascimento: '2002-12-08',
    role: 'estudante',
    ativo: true, 
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
};

const admin = {
    nome: 'Alana',
    email: 'a@a.com',
    nascimento: '2003-06-11',
    role: 'admin',
    ativo: true, 
    criarCurso: function(){
        console.log('curso criado');
        
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

