const os = require("os");
const path = require("path");
const fs = require("fs");


function escreveLogMemoria(){
    const memoriaTotal = Math.floor(os.totalmem() / 1024 /1024);
    const memoriaLivre = Math.floor(os.freemem() / 1024 /1024);
    const usoMemoria = Math.floor((memoriaLivre * 100) / memoriaTotal)
    const conteudo = `Memória total = ${memoriaTotal} MB, Memória livre = ${memoriaLivre} MB, utilização = ${usoMemoria} % ${os.EOL}`;

    try {
        fs.appendFileSync(path.resolve("..","arquivos", "log.txt"), conteudo)
    } catch (error) {
        console.log(error)
    }
}

setInterval(escreveLogMemoria, 5000);
export {};


/*1. Crie um script que irá salvar as informações da
memória a cada 5 segundos em um arquivo chamado log.txt

As informações devem ser salvas no seguinte formato:
Memória total: xx MB, Memória livre: xx MB, Utilização da memória: xx%*/