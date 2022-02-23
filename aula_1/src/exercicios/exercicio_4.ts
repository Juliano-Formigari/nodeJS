const path = require("path");
const { EOL } = require("os");
const fs = require("fs");
import chalk from "chalk";


try{
    const dadosArquivo = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'arquivos', 'exercicioNomes.txt'));
    const converterEmString = dadosArquivo.toString('utf-8')
    const dadosEmVetor = converterEmString.split(EOL);
    const nomesComA = dadosEmVetor.filter((e : string) => e[0].toUpperCase() === "A")
    const nomesComC = dadosEmVetor.filter((e : string) => e[0].toUpperCase() === "C")
    const nomesComD = dadosEmVetor.filter((e : string) => e[0].toUpperCase() === "D")

    nomesComA.forEach((e : string) => console.log(chalk.red(e)))
    nomesComC.forEach((e : string) => console.log(chalk.blue(e)))
    nomesComD.forEach((e : string) => console.log(chalk.magenta(e)))


}catch (error){
    console.error(error)
}

export{};