const os = require("os")

//Informações do processador do computador;
console.log(os.cpus())

//Verificar quantidade de memória que está sendo consumida;
const memoriaEmBytes = os.freemem();
const memoriaEmMegaBytes = Math.floor(memoriaEmBytes / 1024 / 1024);
const memoriaEmGigaBytes = Math.floor(memoriaEmBytes / 1024 / 1024 / 1024);
console.log(`Quantidade de memória disponível em mega byte ${memoriaEmMegaBytes} MB`)
console.log(`Quantidade de memória disponível em giga byte ${memoriaEmGigaBytes} GB`)

//Consultar o sistema operacional
console.log(os.platform())

//Quantidade de minutos que o computador está ligado;
const tempoLigado = os.uptime();
const tempoEmHoras = Math.floor(tempoLigado / 60 /60)
console.log(`Quantidade de horas ligado ${tempoEmHoras} Hrs`)

export {};