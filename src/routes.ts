import { Router } from 'express'
import { AuthenticateClientController } from './modules/account/authenticateClient/authenticateClientController'
import { CreateClientController } from './modules/clients/useCases/createClient/createClientController'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()


routes.post('/client', createClientController.handle)
routes.post('/authenticate', authenticateClientController.handle)

// No express, o que for passado após minha rota, funciona automaticamente como um middleware.
// Por tanto, passando apenas o controler, o request e response já irão automaticamente pra ele

export { routes }