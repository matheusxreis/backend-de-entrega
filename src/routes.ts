import { Router } from 'express'
import { AuthenticateClientController } from './modules/account/authenticateClient/authenticateClientController'
import { CreateClientController } from './modules/clients/useCases/createClient/createClientController'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()

routes.post('/client', createClientController.handle)
routes.post('/authenticate', authenticateClientController.handle)
routes.post('/deliveryman', createDeliverymanController.handle)

// No express, o que for passado após minha rota, funciona automaticamente como um middleware.
// Por tanto, passando apenas o controler, o request e response já irão automaticamente pra ele

export { routes }