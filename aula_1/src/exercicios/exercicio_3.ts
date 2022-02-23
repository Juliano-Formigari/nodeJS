const fs = require ("fs");
const path = require ("path");


interface User{
    nome: string;
    idade: number;
    email: string;
}

function getUserByName(name: string):User | void{
    const dadosArquivo =  fs.readFileSync(path.join(__dirname,'..', '..', 'src', 'arquivos', 'users.json'));
    const converterEmString = dadosArquivo.toString('utf-8');
    const dadosEmJson = JSON.parse(converterEmString);

    const usuarioEncontrado = dadosEmJson.find((e : User) => e.nome.toUpperCase() === name.toUpperCase());
    if(!usuarioEncontrado) {
        console.log("Usuário não encontrado")
        return
    }

    console.log(usuarioEncontrado);
}

getUserByName("teste");
getUserByName("Maria");

export {};