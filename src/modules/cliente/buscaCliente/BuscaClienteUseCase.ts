import { prisma } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";


export class BuscaClienteUseCase {
    async execute() {
        const cliente = await prisma.cliente.findMany()

        if(!cliente) {
            throw new AppError('Não há clientes cadastrados no momento.', 400)
        }

        return cliente
    }
}