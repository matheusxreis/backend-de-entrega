import { prisma } from '../../../../database/prismaClient'
import { hash } from 'bcrypt'

interface ICreateClient {
    username: string,
    password: string
}

export class CreateClientUseCase {

async execute({password, username}: ICreateClient){

    //SELECT 
    const clientExist = await prisma.clients.findFirst({
        where: {
            username: {
                equals: username,
                mode: "insensitive",
            }
        }
    })

    if(clientExist){
        throw new Error("Client already exist")
    }

    const hashPassword = await hash(password, 10)

    // prisma.table.create
    const client = await prisma.clients.create({
        data: {
            username,
            password: hashPassword
        }
    })

    return client
    //salvar o cliente

}

}