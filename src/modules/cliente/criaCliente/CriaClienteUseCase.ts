import { prisma } from "../../../database/prismaClient"
import * as yup from 'yup';


const clienteSchema = yup.object().shape({
    documento: yup
      .string()
      .matches(
        /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/,
        'Documento inválido (CPF ou CNPJ)'
      )
      .required('CPF/CNPJ obrigatório'),
});

export class CriaClienteUseCase {
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
        email: string
        ) {
        // await clienteSchema.validate({cpfCnpj}, { abortEarly: false });

        const cliente = await prisma.cliente.create({
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
        });

        return cliente;
    }
}
