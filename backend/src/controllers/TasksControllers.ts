import { Response, Request } from 'express';
import TaskRepository from '../repositories/TaskRepository';
import CreateTaskService from '../services/CreateTaskService';

class TasksControllers {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;

    const taskRepository = new TaskRepository();
    const createTask = new CreateTaskService(taskRepository);
    const task = await createTask.execute(title, description);

    return response.status(200).json(task);
  }
}

export default TasksControllers;
