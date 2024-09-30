const user = {
    nome: 'Aurélio',
    email: 'aurelio@example.com',
    nascimento: '01/01/2000',
    role: 'admin    ',
    ativo: true,
    
    exibirInfos: function() {
        console.log(this.nome, this.email, this.role, this.ativo);
    }
}

user.exibirInfos();

//exibir perdeu contexto. Como não faz parte do objeto, retornará undefined em todos os campos.
const exibir = user.exibirInfos;
exibir();


// Agora vamos usar o bind para passar o contexto a uma função criada fora do objeto.
// exibirUsusario aplica a função exibir2 a user.
const exibir2 = function() {
    console.log(this.nome, this.email, this.role, this.ativo);
}
const exibirUsusario = exibir2.bind(user);
exibirUsusario();

// Aqui vamos usar o método call para passar contexto para a funcão exibir2.
// Observe que não precisamos de uma variável auxiliar.
exibir2.call(user);

// Também podemos usar o apply.
// O apply permite passar um array como argumento, que neste caso específico não usaremos.
exibir2.apply(user);

// Exemplo de apply com array de argumentos:
// O método executaFuncao recebe como parâmetro a função que executará e passa para ela o contexto e um array de argumentos.
// Então ao ser chamado em user2.executaFuncao(exibeMensagem) ele executa a função exibeMensagem e passa o contexto user2 e o array [this.nome, this.email].
function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
}
    const user2 = {
    nome: 'Fulano',
    email: 'fulano@example.com',
    executaFuncao: function(fn) {
      fn.apply(user2, [this.nome, this.email])
    }
   }
    user2.executaFuncao(exibeMensagem)