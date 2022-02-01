import { Request, Response } from 'express'
import { AuthenticateDeliverymanUseCase } from './authenticateDeliverymanUseCase'

export class AuthenticateDeliverymanController {

    async handle(request: Request, response:Response){
        const { username, password } = request.body

        const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase()

        const result = await authenticateDeliverymanUseCase.execute({
            username, password
        })

        //retornando o token 
        return response.json(result)
    }
}