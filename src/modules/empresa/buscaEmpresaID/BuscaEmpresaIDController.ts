import { Request, Response } from "express";
import { BuscaEmpresaIDUseCase } from "./BuscaEmpresaIDUseCase";

export class BuscaEmpresaIDController {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        const buscaEmpresaIDUseCase = new BuscaEmpresaIDUseCase()

        const result = await buscaEmpresaIDUseCase.execute(parseInt(id))

        return res.status(200).send(result)
    }
}