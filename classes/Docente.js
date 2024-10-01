import User from './User.js';

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        // O super traz as propriedades e métodos da classe pai (superclasse).
        // Ele está sendo usado para passar os argumentos para o construtor da superclasse.
        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante(id, curso) {
        return `Estudante de id ${id} aprovado no curso ${curso}.`;
    }
}

const newDocente = new Docente('Ciclano', 'ciclano@example.com', '01/01/2002');
console.log(newDocente);
console.log(newDocente.exibirInfos());
console.log(newDocente.aprovaEstudante(1, 'POO com JS'));