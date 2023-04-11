import { Router } from 'express'
import { ItemsController } from './controllers/ItemsController'

const routes = Router()

routes.post('/items', new ItemsController().create)

export default routes

