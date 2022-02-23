const fs = require("fs");
const path = require("path");
const { EOL } = require("os");


try{
    const dadosArquivo = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'arquivos', 'exercicioNomes.txt'));
    const converterEmString = dadosArquivo.toString('utf-8')
    const dadosEmVetor = converterEmString.split(EOL);
    const nomesComA = dadosEmVetor.filter((e : string) => e[0].toUpperCase() === "A")


    console.log(nomesComA)

}catch (error){
    console.error(error)
}


export {};