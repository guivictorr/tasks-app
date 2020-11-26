import { Router } from 'express';
import TasksController from './controllers/TasksControllers';

const routes = Router();
const taskController = new TasksController();

routes.post('tasks', taskController.create);

export default routes;
