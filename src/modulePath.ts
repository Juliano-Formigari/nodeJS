const path = require("path");

//Listar os diretórios;
console.log(__dirname);
console.log(__filename);

//Concantenado diretórios;
console.log(path.join(__dirname, "pasta", "teste"));
console.log(path.resolve("pasta", "teste"));
console.log(path.parse(__dirname));
console.log(path.extname(__filename));
