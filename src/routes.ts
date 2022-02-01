import { Router } from 'express'
import { AuthenticateClientController } from './modules/account/authenticateClient/authenticateClientController'
import { CreateClientController } from './modules/clients/useCases/createClient/createClientController'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/authenticateDeliverymanController'
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/createDeliveryController'
import { ensureAuthenticateClient} from './middlewares/ensureAuthenticateClient'
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman'
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController'
import { UpdateDeliveryController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController'
import { FindAllDeliveriesController } from './modules/clients/useCases/deliveries/FindAllDeliveriesController'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
//
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
//
const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()
const updateDeliveryController = new UpdateDeliveryController()
const findAllDeliveriesController = new FindAllDeliveriesController()

routes.post('/client', createClientController.handle)
routes.post('/client/authenticate', authenticateClientController.handle)
//
routes.post('/deliveryman', createDeliverymanController.handle)
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle)
//
routes.post('/delivery', 
ensureAuthenticateClient, 
createDeliveryController.handle)

routes.get('/delivery/available', 
ensureAuthenticateDeliveryman, 
findAllAvailableController.handle)

routes.put('/delivery/updatedeliveryman/:id',
 ensureAuthenticateDeliveryman, 
 updateDeliveryController.handle)


 routes.get('/client/deliveries',
 ensureAuthenticateClient
 ,findAllDeliveriesController.handle)
// No express, o que for passado após minha rota, funciona automaticamente como um middleware.
// Por tanto, passando apenas o controler, o request e response já irão automaticamente pra ele

export { routes }