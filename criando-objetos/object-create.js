function User(nome, email) {
    this.nome = nome
    this.email = email
    
    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`;
    }
}

function Admin(role) {
    // O contexto desse this é User.
    User.call(this, 'Fulano', 'fulano@example.com');
    this.role = role || 'estudante';
}

// Essa linha está dizendo que o protótipo da função construtora Admin será um novo objeto que herda todas as propriedades e métodos do protótipo da função construtora User.
Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin('admin');
console.log(novoUser.exibirInfos());
console.log(novoUser.role);