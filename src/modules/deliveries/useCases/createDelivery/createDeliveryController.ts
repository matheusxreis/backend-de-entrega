import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./createDeliveryUseCase";

export class CreateDeliveryController {

    async handle(request: Request, response: Response){
        const {id_client, item_name} = request.body
        
        const createDeliveryUseCase = new CreateDeliveryUseCase();

        const delivery = await createDeliveryUseCase.execute({
            id_client,
            item_name
        })

        return response.status(201).json(delivery)
    }
}