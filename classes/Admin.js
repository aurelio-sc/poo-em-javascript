import User from './User.js';

class Admin extends User {
    // Se não for declarado um novo construtor, o construtor padrão é o construtor da superclasse.
    constructor(nome, email, nascimento, role = 'admin', ativo = true, podeCriarCurso = true) {
        // O super traz as propriedades e métodos da classe pai (superclasse).
        // Ele está sendo usado para passar os argumentos para o construtor da superclasse.
        super(nome, email, nascimento, role, ativo);
        // Agora adicionamos uma propriedade extra para o objeto Admin.
        this.podeCriarCurso = podeCriarCurso;
    }
    criarCurso(nomeDoCurso, vagas) {
        if (this.podeCriarCurso) {
            return `Curso ${nomeDoCurso} criado com ${vagas} vagas.`;
        }
        return  `O administrador ${this.nome} não pode criar o curso.`
    }
}

const newAdmin = new Admin('Fulano', 'fulano@example.com', '01/01/2001', 'admin', true, true);
console.log(newAdmin);
console.log(newAdmin.exibirInfos());
console.log(newAdmin.criarCurso('POO com JS', 30));