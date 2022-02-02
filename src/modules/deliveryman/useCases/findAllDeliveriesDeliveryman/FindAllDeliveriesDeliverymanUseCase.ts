import { prisma } from "../../../../database/prismaClient";


export class FindAllDeliveriesDeliverymanUseCase {
        async execute(id_deliveryman: string){
            
            const deliveries = await prisma.deliveryman.findMany({
                where: {
                    id: {
                        equals: id_deliveryman
                    },
                },
                select: {
                    deliveries: true,
                    id: true,
                    username: true
                }
        
            })
        
            return deliveries

        }
}