import { Request, Response } from "express";
import { DeletaClienteUseCase } from "./DeletaClienteUseCase";

export class DeletaClienteController {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        const deletaClienteUseCase = new DeletaClienteUseCase()

        const result = await deletaClienteUseCase.execute(parseInt(id))

        return res.status(200).send(result)
    }
}