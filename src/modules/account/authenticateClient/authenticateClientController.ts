import { Request, Response } from 'express'
import { AuthenticateClientUseCase } from './authenticateClientUseCase'

export class AuthenticateClientController {

    async handle(request: Request, response:Response){
        const { username, password } = request.body

        const authenticateClientUseCase = new AuthenticateClientUseCase()

        const result = await authenticateClientUseCase.execute({username, password})

        //retornando o token 
        return response.json(result)
    }
}