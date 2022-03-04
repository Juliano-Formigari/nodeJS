import express from 'express';
import { UsuarioController } from '../controllers/UsuarioController';
import { autenticacaoMiddleware } from '../middlewares/authenticacaoMiddleware';

const router = express.Router();

/*
GET - Obtem
POST - Cria
PUT - Atualiza
DELETE - Remove
*/

/**
 *  @swagger
 *  /v1/usuarios:
 *      get:
 *          summary: Retorna todos os usuários do sistema
 *          tags:
 *              - Usuários
 *          responses:
 *              200:
 *                  description: Os usuários do sistema
 */

/**
 *  @swagger
 *  /v1/usuarios:
 *      post:
 *          summary: Cadastra um usuário
 *          tags:
 *              - Usuários
 *          requestBody:
 *              require: true
 *              content:
 *                  application/json:
 *                  schema:
 *                  type: object
 *                  properties
 *                      nome:
 *                          type: string
 *                      email:
 *                          type: string
 *                      senha:
 *                          type: string
 *              responses:
 *                  201: 
 *                      description: Usuário criado
 *                  409: 
 *                      description: Já existe um usuário com este e-mail
 */

router.get("/", UsuarioController.obtemTodosUsuarios);
router.get("/:id", UsuarioController.obtemUmUsuario);
router.post("/", UsuarioController.criaUsuario);
router.put("/:id", UsuarioController.atualizaUsuario);
router.delete("/:id", autenticacaoMiddleware, UsuarioController.removeUsuario);

router.get("/:id/tarefas", UsuarioController.obterTarefasDoUsuario);

router.post("/:id/tarefas", UsuarioController.criaTarefaParaUsuario);

export default router;