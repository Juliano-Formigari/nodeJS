import { Request, Response } from "express";
import express from "express";

const app = express();
const PORT = 8080;

const usuarios = [
    {id: 1, nome: "João", email: "joao@gmail.com", senha: "123456"},
    {id: 2, nome: "Pedro", email: "pedro@gmail.com", senha: "123456"},
    {id: 3, nome: "Maria", email: "maria@gmail.com", senha: "123456"},
    {id: 4, nome: "Marcos", email: "marcos@gmail.com", senha: "123456"},
    {id: 5, nome: "Thiago", email: "thiago@gmail.com", senha: "123456"},
];

//Middleware que faz o parse do request body --> Transforma o "json" em objeto;
//Ele deve ser adicionado antes das rotas;
app.use(express.json());

app.get("/usuarios", (req: Request, res: Response) => {
    res.json(usuarios);
});

app.put("/", (req: Request, res: Response) => {
    res.send("Atualizou")
});

app.delete("/", (req: Request, res: Response) => {
    res.send("Removeu")
});

app.post("/", (req: Request, res: Response) => {
    res.send("Criou teste!")
});

app.listen(PORT, () => {
    console.log("O servidor está funcionando na porta " + PORT)
})