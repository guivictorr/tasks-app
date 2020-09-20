import { Router } from 'express'
import { TasksController } from './controller/TasksController'

const routes = Router()
const tasksController = new TasksController

routes.get('/tasks', tasksController.getTasks)
routes.post('/tasks', tasksController.saveTask)
routes.get('/tasks/:id', tasksController.getTask)
routes.put('/tasks/:id', tasksController.updateTask)
routes.patch('/tasks/:id', tasksController.finishedTask)
routes.delete('/tasks/:id', tasksController.deleteTask)

export default routes