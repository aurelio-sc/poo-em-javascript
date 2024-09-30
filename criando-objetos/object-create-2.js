const user = {
    //init substitui a função construtora.
    init: function(nome, email) {
        this.nome = nome;
        this.email = email;
    },
    exibirInfos: function(nome) {
        return nome;
    },
    exibirInfosAposInit: function() {
        return `${this.nome}, ${this.email}`;
    }
}

const newUser = Object.create(user);
console.log(newUser.exibirInfos('Aurélio'));

console.log(user.isPrototypeOf(newUser));

const newUser2 = Object.create(user);
newUser2.init('Fulano', 'fulano@example.com');
console.log(newUser2.exibirInfosAposInit());