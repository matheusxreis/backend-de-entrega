import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateController {
    async handle(request: Request, response: Response){
        const { id_delivery } = request.params
        const { id_deliveryman } = request

        const updateEndDateUseCase = new UpdateEndDateUseCase()

        const delivery = updateEndDateUseCase.execute({
            id_delivery,
            id_deliveryman
        })

        response.json(delivery)
    }
}