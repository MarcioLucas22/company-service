import { prisma } from "../../../database/prismaClient"
import { AppError } from "../../../errors/AppError"
import * as yup from 'yup';


const clienteSchema = yup.object().shape({
    cpfCnpj: yup
      .string()
      .matches(
        /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/,
        'Documento inválido (CPF ou CNPJ)'
      )
      .required('CPF/CNPJ obrigatório'),
});

export class EditaClienteUseCase {
    async execute(nome: string, 
        cpfCnpj: string, 
        registroMunicipal: string,
        rua: string,
        numero: string,
        complemento: string,
        bairro: string,
        codigoMunicipio: string,
        cidade: string,
        uf: string,
        cep: string,
        telefone: string,
        email: string, 
        id: number) {

        const findCliente = await prisma.cliente.findUnique({
            where: {
                id
            }
        })

        if(!findCliente) {
            throw new AppError('Cliente não encontrado.', 400)
        }

        await clienteSchema.validate({cpfCnpj}, { abortEarly: false });

        const cliente = prisma.cliente.update({
            where: {
                id
            },
            data: {
                nome, 
                cpfCnpj, 
                registroMunicipal,
                endereco: {
                    create: {
                        rua,
                        numero,
                        complemento,
                        bairro,
                        codigoMunicipio,
                        cidade,
                        uf,
                        cep,
                    }
                },
                contato: {
                    create: {
                        telefone,
                        email
                    }
                }
            },
            select: {
                id: true,
                nome: true,
                cpfCnpj: true,
                registroMunicipal: true,
                endereco: true,
                contato: true
            }
        })

        return cliente
    }
}
