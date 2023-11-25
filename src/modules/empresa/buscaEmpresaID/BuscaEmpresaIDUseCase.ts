import { prisma } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";


export class BuscaEmpresaIDUseCase {
    async execute(id: number) {
        const empresa = await prisma.empresa.findUnique({
            where: {
                id
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
            }
        })

        if(!empresa) {
            throw new AppError('Empresa não encontrada.', 400)
        }

        return empresa
    }
}