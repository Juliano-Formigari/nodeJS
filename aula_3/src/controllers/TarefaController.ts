import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { getRepository } from "typeorm";
import { Tarefa } from "../entity/Tarefa";

export class TarefaController{
    static async obtemTodasTarefas(req: Request, res: Response, next: NextFunction){
        try {
            const tarefas = await getRepository(Tarefa).find();
            res.json(tarefas);
        } catch (error) {
            next(error)
        }
    };
    static async obtemUmaTarefa(req: Request, res: Response, next: NextFunction) {
        try {
            const tarefa = await getRepository(Tarefa).findOne(req.params.id);

            if (!tarefa) throw createHttpError(404, "Tarefa não foi encontrado!!");
            res.json(tarefa);
        } catch (error) {
            next(error)
        }
    };
    static async atualizarTarefa(req: Request, res: Response, next: NextFunction) {
        try {
            const tarefaExiste = await getRepository(Tarefa).findOne(req.params.id)
            if(!tarefaExiste) throw createHttpError(404, "Tarefa não foi encontrada!!")
            getRepository(Tarefa).merge(tarefaExiste, req.body);
            const resultado = await getRepository(Tarefa).save(tarefaExiste)
            res.json(resultado)

        } catch (error) {
            next(error)
        }
    };
    static async removerUmaTarefa(req: Request, res: Response, next: NextFunction) {
        try {
            const tarefaExiste = await getRepository(Tarefa).findOne(req.params.id)
            if(!tarefaExiste) throw createHttpError(404, "Tarefa não foi encontrada!!")

            getRepository(Tarefa).delete(tarefaExiste);
            res.status(204).end();

        } catch (error) {
            next(error)
        }
    };
}