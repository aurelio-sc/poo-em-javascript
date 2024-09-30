const user = {
    nome: 'Aurélio',
    email: 'aurelio@example.com',
    nascimento: '01/01/2000',
    role: 'estudante',
    ativo: true,
    
    exibirInfos: function() {
        console.log(this.nome, this.email, this.role, this.ativo);
    }
}

const admin = {
    nome: 'Fulano',
    email: 'fulano@example.com',
    nascimento: '01/01/2001',
    role: 'admin',
    ativo: true,
    
    criarCurso() {
        console.log('Curso criado!');
    }
}
// O método setPrototypeOf permite que o objeto admin herde as propriedades e métodos do objeto user.
// Então mesmo que admin não tenha o método exibirInfos, o objeto admin herda o método exibirInfos do objeto user.
// Isso se chama herança de protótipo.
Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();