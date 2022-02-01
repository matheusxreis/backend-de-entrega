import { prisma } from '../../../database/prismaClient'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IAuthenticateDeliveryman {
    username: string,
    password: string
}

export class AuthenticateDeliverymanUseCase {

    async execute({username, password}: IAuthenticateDeliveryman){

        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        })

        if(!deliveryman){
            throw new Error("Username or password invalid!")
        }

        //comparação da senha criptografada com a passada via login
        const passwordMatch = await compare(password, deliveryman.password)

        if(!passwordMatch){
            throw new Error("Username or password invalid!")
        }
       
        // parâmetros: payload, chave-secreta, objeto com subject e expiresIn
        const token = sign({username}, 
            "1d2e96e6bdcc46d98jhbbc47064237dff",
            {subject: deliveryman.id,
            expiresIn: '1d'})

        return token
}

}