import { Router } from 'express';
import TasksController from './controllers/TasksControllers';

const routes = Router();
const taskController = new TasksController();

routes.post('/tasks', taskController.create);
routes.get('/tasks', taskController.index);
routes.get('/tasks/:id', taskController.search);
routes.put('/tasks/:id', taskController.update);
routes.patch('/tasks/:id', taskController.finish);
routes.delete('/tasks/:id', taskController.destroy);

export default routes;
