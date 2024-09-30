function User(nome, email) {
    this.nome = nome
    this.email = email
    
    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`;
    }
}

const newUser = new User('Aurélio', 'aurelio@example.com');
console.log(newUser.exibirInfos());

// User é uma função construtora.
// Criamos um objeto com a palavra-chave new.
// Depois, a função User atribui propriedades a esse objeto.
// Por isso que o this funciona. Ele está referenciando o novo objeto criado.
// Ou seja, o this não se referencia à função User, mas ao objeto criado a partir da palavra-chave new.