import { Request, Response } from "express";
import { EditaClienteUseCase } from "./EditaClienteUseCase";

export class EditaClienteController {
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
            email,
        } = req.body
        const { id } = req.params

        const editaClienteUseCase = new EditaClienteUseCase()

        const result = await editaClienteUseCase.execute(
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
            email,
            parseInt(id))

        return res.status(200).send(result)
    }
}