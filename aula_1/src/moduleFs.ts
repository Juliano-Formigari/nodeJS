const { EOL } = require("os");
const path = require("path");
const fs = require("fs");

const caminhoArquivo = path.join(__dirname, "..", "src" , "arquivos" ,"teste.txt");

try{
    const data = fs.readFileSync(caminhoArquivo);
    const dataEmString = data.toString("utf-8");
    const dataEmLinhas = dataEmString.split( EOL );
    console.log(dataEmLinhas)

} catch (error) {
    console.log(error);
}

const textoArquivo = "HELLO"
try{
    fs.writeFileSync(caminhoArquivo, textoArquivo);
} catch (error) {
    console.log(error)
}

const novoTextoDoArquivo = EOL + "Essa é a nova linha"

try{
    fs.appendFileSync(caminhoArquivo, novoTextoDoArquivo)
} catch(error){
    console.log(error)
}

try {
    const statusDoArquivo = fs.statSync(caminhoArquivo);
    console.log(statusDoArquivo)
} catch (error) {
    console.log(error);
}

//Executa uma função depois de um tempo;
setTimeout(() => console.log("Teste"),2000);
setInterval(() => console.log("Teste3"),3000);

export {};
