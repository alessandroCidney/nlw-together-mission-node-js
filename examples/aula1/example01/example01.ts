// Primeiro exemplo de código em TypeScript

// Interface com três itens, sendo que o telefone é opcional
interface Usuario {
    nome: string, email: string, telefone?: string
}

// Uma função que imprime uma mensagem no console
// O objeto recebido possui estrutura relacionada a da interface Usuario
function enviarEmail1({email, nome, telefone} : Usuario) {
    console.log(`Olá ${nome}! Seu email é ${email} e seu telefone é ${telefone}`);
}

enviarEmail1({
    email: "user@example.com",
    nome: "username",
    // telefone: "(55) 9 9999-9999" (Opcional)
});