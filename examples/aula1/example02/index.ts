function enviarEmail2(nome: string, email: string) {
    console.log(`Enviar e-mail para ${nome} com email ${email}`);
}

enviarEmail2("Sr.Example", "srexample@example.com");

// Necessário instalar o Yarn com npm i -g yarn
// Necessário inicializar o TypeScript com yarn tsc --init

// Mudar a configuração strict do tsconfig.json para false

// Ao executar yarn tsc, os arquivos em typescript são convertidos para javascript, e então é
// possível executá-los com o Node.JS

// Necessário instalar o Express através de yarn add express