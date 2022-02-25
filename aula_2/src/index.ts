import { Request, Response } from "express";
import express from "express";

const app = express();
const PORT = 8080;

let usuarios = [
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

//400 - Requisição ruim;
//401 - Não está autorizada;
//403 - Não tem permissão;
//404 - Não encontrada;
//409 - Conflito;

//500 - Erro interno do servidor;
app.get("/usuarios/:id", (req: Request, res: Response) => {
    const usuarioId = req.params.id;

    const usuario = usuarios.find((e => e.id === +usuarioId))
    if(!usuario){
        return res.status(404).json({error: "Usuário não foi encontrado!!"});
    }
    res.json(usuario);
});

//Status de sucesso
//200 - OK
//201 - Criado com sucesso;
//204 - Não tem conteúdo
app.post("/usuarios", (req: Request, res: Response) => {
    const novoUsuario = req.body;
    
    const usuarioJaCadastrado = usuarios.find(usuario => usuario.email === novoUsuario.email);

    if(usuarioJaCadastrado){
        return res.status(409).json({error: "Já existe um usuário cadastrado com este e-mail"})
    }

    novoUsuario.id = usuarios[usuarios.length - 1].id + 1;
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario)

});

app.post("/", (req: Request, res: Response) => {
    res.send("Criou teste!")
});

app.put("/", (req: Request, res: Response) => {
    res.send("Atualizou")
});
app.put("/usuarios/:id", (req: Request, res: Response) => {
    const usuarioId = req.params.id

    const usuario = usuarios.find(usuario => usuario.id === +usuarioId);
    if(!usuario){
        return res.status(404).json({error: "Usuário não encontrado!"});
    }

    const dadosAtualizados = req.body;
    usuario.nome = dadosAtualizados.nome;
    usuario.email = dadosAtualizados.email;
    usuario.senha = dadosAtualizados.senha;
    res.json(usuario);
});

app.delete("/", (req: Request, res: Response) => {
    res.send("Removeu")
});

app.delete("/usuarios/:id", (req: Request, res: Response) => {
    const usuarioId = req.params.id

    const usuario = usuarios.find(usuario => usuario.id === +usuarioId);
    if(!usuario){
        return res.status(404).json({error: "Usuário não encontrado!"});
    }

    usuarios = usuarios.filter(usuario => usuario.id !== +usuarioId)

    res.status(204).end();
});







app.listen(PORT, () => {
    console.log("O servidor está funcionando na porta " + PORT)
})