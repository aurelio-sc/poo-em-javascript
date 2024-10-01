export default class PrivateUser {
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }   

    setNome(nome) {
        this.#nome = nome;
    }

    // Funções getters nunca recebem argumentos.
    // Quando for chamada, não se usa (), apenas o nome da propriedade.
    get nome() {
        return this.#nome;
    }

    // Funções setters sempre recebem argumentos.
    // Podemos inserir validações detro dos setters.
    // Para usá-la, usamos o nome da propriedade e o operador de atribuição.
    set nome(novoNome) {
        this.#nome = novoNome;
    }

    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

     // Os métodos das classes não precisam ser delcarados com a plavra-chave function.
     exibirInfos() {
        const objUser = this.#montaObjUser();
        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`;
    }
}


const newPrivateUser = new PrivateUser('Fulano', 'fulano@example.com', '01/01/2001');
// A linha abaixo lançará um erro, porque a propriedade #nome está privada.
//newPrivateUser.#nome = 'Ciclano';

// É possível atribuir um valor para nome, porque apesar da propriedade #nome estar privada, existe um setter para ela.
newPrivateUser.nome = 'Beltrano';

// É possível chamar a propriedade nome, porque na classe foi definido em getter para ela.
console.log(newPrivateUser.nome);
// Já a linha abaixo retorna undefined, porque a propriedade #email está privada e não existe um getter para ela.
console.log(newPrivateUser.email);
