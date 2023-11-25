import { prisma } from "../../../database/prismaClient"
import { AppError } from "../../../errors/AppError"
import { RegimeEspecialTributacao } from "@prisma/client"
import * as yup from 'yup';


const empresaSchema = yup.object().shape({
    cnpj: yup
      .string()
      .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CNPJ inválido') 
      .required('CNPJ é obrigatório'),
});

export class EditaEmpresaUseCase {
    async execute(razaoSocial: string, 
        cnpj: string,
        registroMunicipal: string,
        regimeEspecialTributacao: RegimeEspecialTributacao,
        optanteSimplesNacional: boolean,
        rua: string,
        numero: string,
        complemento: string,
        telefone: string,
        email: string,
        bairro: string,
        codigoMunicipio: string,
        cidade: string,
        uf: string,
        cep: string,
        id: number) {

        const findEmpresa = await prisma.empresa.findUnique({
            where: {
                id
            }
        })

        if(!findEmpresa) {
            throw new AppError('Empresa não encontrada.', 400)
        }

        await empresaSchema.validate({cnpj}, { abortEarly: false });

        const empresa = prisma.empresa.update({
            where: {
                id
            },
            data: {
                cnpj,
                optanteSimplesNacional,
                razaoSocial, 
                regimeEspecialTributacao,
                registroMunicipal,
                endereco: {
                    create: {
                        codigoMunicipio,
                        bairro,
                        cep,
                        cidade,
                        complemento,
                        numero,
                        rua,
                        uf,
                    }
                },
                contato: {
                    create: {
                        email,
                        telefone,
                    }
                },
                
            },
            select: {
                id: true,
                razaoSocial: true,
                cnpj: true,
                optanteSimplesNacional: true,
                regimeEspecialTributacao: true,
                registroMunicipal: true,
                endereco: true,
                contato: true
            },
        })

        return empresa
    }
}
