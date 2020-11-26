import { Router } from 'express';
import TasksController from './controllers/TasksControllers';

const routes = Router();
const taskController = new TasksController();

routes.post('/tasks', taskController.create);
routes.get('/tasks', taskController.index);
routes.put('/tasks/:id', taskController.update);
routes.patch('/tasks/:id', taskController.finish);

export default routes;
