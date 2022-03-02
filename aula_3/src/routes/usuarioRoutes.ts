import express from 'express';
import { UsuarioController } from '../controllers/UsuarioController';

const router = express.Router();

/*
GET - Obtem
POST - Cria
PUT - Atualiza
DELETE - Remove
*/

router.get("/usuarios", UsuarioController.obtemTodosUsuarios);
router.get("/usuarios/:id", UsuarioController.obtemUmUsuario);
router.post("/usuarios", UsuarioController.criaUsuario);
router.put("/usuarios/:id", UsuarioController.atualizaUsuario);
router.delete("/usuarios/:id", UsuarioController.removeUsuario);

router.post("/usuarios/:id/tarefas", UsuarioController.criaTarefaParaUsuario);

export default router;