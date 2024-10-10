const user = {
    nome: 'Maiara',
    email: 'm@m.com',
    nascimento: '2002-12-08',
    role: 'estudante',
    ativo: true, 
    exibirInfos: function () {
        console.log(this.nome, this.email);
        
    }
}

//user.exibirInfos();

const exibir = function () {
    console.log(this.nome, this.email);
}

const exibirNome = exibir.bind(user);
exibirNome();