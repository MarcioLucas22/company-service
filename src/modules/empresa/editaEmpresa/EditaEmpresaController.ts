import { Request, Response } from "express";
import { EditaEmpresaUseCase } from "./EditaEmpresaUseCase";

export class EditaEmpresaController {
    async handle(req: Request, res: Response) {
        const { 
            razaoSocial, 
            cnpj,
            registroMunicipal,
            regimeEspecialTributacao,
            optanteSimplesNacional,
            rua,
            numero,
            complemento,
            telefone,
            email,
            bairro,
            codigoMunicipio,
            cidade,
            uf,
            cep
        } = req.body
        const { id } = req.params

        const editaEmpresaUseCase = new EditaEmpresaUseCase()

        const result = await editaEmpresaUseCase.execute(
            razaoSocial, 
            cnpj,
            registroMunicipal,
            regimeEspecialTributacao,
            optanteSimplesNacional,
            rua,
            numero,
            complemento,
            telefone,
            email,
            bairro,
            codigoMunicipio,
            cidade,
            uf,
            cep, 
            parseInt(id))

        return res.status(200).send(result)
    }
}