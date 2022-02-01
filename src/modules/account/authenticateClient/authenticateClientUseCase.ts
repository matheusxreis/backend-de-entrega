import { prisma } from '../../../database/prismaClient'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IAuthenticateClient {
    username: string,
    password: string
}

export class AuthenticateClientUseCase {

    async execute({username, password}: IAuthenticateClient){

        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })

        if(!client){
            throw new Error("Username or password invalid!")
        }

        //comparação da senha criptografada com a passada via login
        const passwordMatch = await compare(password, client.password)

        if(!passwordMatch){
            throw new Error("Username or password invalid!")
        }
       
        // parâmetros: payload, chave-secreta, objeto com subject e expiresIn
        const token = sign({username}, 
            "1d2e96e6bdcc46d081bbc47064237dff",
            {subject: client.id,
            expiresIn: '1d'})

        return token
}

}