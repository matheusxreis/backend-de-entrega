import { FindAllDeliveriesDeliverymanUseCase } from "./FindAllDeliveriesDeliverymanUseCase";
import { Request, Response } from 'express'

export class FindAllDeliveriesDeliverymanController{
    async handle(request: Request, response: Response){

        const { id_deliveryman } = request

        const findAllDeliveriesDeliverymanUseCase = new FindAllDeliveriesDeliverymanUseCase()

        const deliveries = await findAllDeliveriesDeliverymanUseCase.execute(id_deliveryman)

        return response.json(deliveries)
    }
}