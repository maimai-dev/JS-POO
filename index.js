import User from './User.js'
import Admin from './Admin.js'
import Docente from './Docente.js'

const novoUser = new User('Gustavo', 'g@g.com', '09/06/2013');
console.log(novoUser.exibirInfos());

const dadosFicticios = User.exibirInfosGenericas('Maiara', 'm@m.com');
console.log(dadosFicticios);



// const novoAdmin = new Admin('Rodrigo', 'r@r.com', '12/07/2006');
// console.log(novoAdmin.exibirInfos());

// const novaDocente = new Docente('Ana', 'a@a.com', '15/09/2000');
// console.log(novaDocente.exibirInfos());





