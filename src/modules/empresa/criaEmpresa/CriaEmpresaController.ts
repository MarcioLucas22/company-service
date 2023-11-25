import { Request, Response } from "express";
import { CriaEmpresaUseCase } from "./CriaEmpresaUseCase";

export class CriaEmpresaController {
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
            
        const criaEmpresaUseCase = new CriaEmpresaUseCase()

        const result = await criaEmpresaUseCase.execute(
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
        )

        return res.status(200).send(result)
    }
}