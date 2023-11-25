import { Request, Response } from "express";
import { CriaClienteUseCase } from "./CriaClienteUseCase";

export class CriaClienteController {
    async handle(req: Request, res: Response) {
        const { 
            nome, 
            cpfCnpj, 
            registroMunicipal,
            rua,
            numero,
            complemento,
            bairro,
            codigoMunicipio,
            cidade,
            uf,
            cep,
            telefone,
            email
        } = req.body
            
        const criaClienteUseCase = new CriaClienteUseCase()

        const result = await criaClienteUseCase.execute(
            nome, 
            cpfCnpj, 
            registroMunicipal,
            rua,
            numero,
            complemento,
            bairro,
            codigoMunicipio,
            cidade,
            uf,
            cep,
            telefone,
            email
        )

        return res.status(200).send(result)
    }
}