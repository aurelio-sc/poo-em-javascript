export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
    }
    // Os métodos das classes não precisam ser delcarados com a plavra-chave function.
    exibirInfos() {
        return `${this.nome}, ${this.email}`;
    }
}

const newUser = new User('Aurélio', 'aurelio@example.com', '01/01/2000');
console.log(newUser);
console.log(newUser.exibirInfos());

// Classes são abstrações ("açúcar sintático") de protótipos.
// Observe como User é o protótipo de newUser.
console.log(User.prototype.isPrototypeOf(newUser));