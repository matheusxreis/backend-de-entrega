import { prisma } from "../../../../database/prismaClient"


interface ICreateDelivery {
    item_name: string;
    id_client: string;
}

export class CreateDeliveryUseCase {

    //1 momento - item_name e id do cliente que tá fazendo o pedido
    //2 momento - id_deliveryman
    //3 momento - end_at
    async execute({
        item_name,
        id_client
    }: ICreateDelivery){

       const delivery =  await prisma.deliveries.create({
        data: {
            item_name,
            id_client
        }   
       })

       return delivery
    }
}