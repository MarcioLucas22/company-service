import { prisma } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";


export class DeletaClienteUseCase {
    async execute(id: number) {
        const findCliente = await prisma.cliente.findUnique({
            where: {
                id
            }
        })
        
        if(!findCliente) {
            throw new AppError('Cliente não encontrado.', 400)
        }

        const cliente = await prisma.cliente.delete({
            where: {
                id
            }
        })

        return cliente
    }
}