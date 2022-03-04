import express from 'express';
import { TarefaController } from '../controllers/TarefaController';

const router = express.Router();

router.get("/", TarefaController.obtemTodasTarefas);
router.get("/:id", TarefaController.obtemUmaTarefa);
router.put("/:id", TarefaController.atualizarTarefa);
router.delete("/:id", TarefaController.removerUmaTarefa);

export default router;