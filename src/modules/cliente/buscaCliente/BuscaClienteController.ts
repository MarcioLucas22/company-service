import { Request, Response } from "express";
import { BuscaClienteUseCase } from "./BuscaClienteUseCase";

export class BuscaClienteController {
    async handle(req: Request, res: Response) {
        const buscaClienteUseCase = new BuscaClienteUseCase()

        const result = await buscaClienteUseCase.execute()

        return res.status(200).send(result)
    }
}