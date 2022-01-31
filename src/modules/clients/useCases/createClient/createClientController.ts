import { Request, response, Response } from 'express'
import { CreateClientUseCase } from './createClientUseCase'

export class CreateClientController {

    async handle(request: Request, response: Response){

        const { username, password } = request.body 

        const createClientUseCase = new CreateClientUseCase()

    try{       
        const result = await createClientUseCase.execute({
            username,
            password
        })
    
        return response.status(201).json(result)
    }catch(err){
            return response.status(400).send()
        }

   
       
    }
}