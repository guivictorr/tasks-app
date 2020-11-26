import { Response, Request } from 'express';
import TaskRepository from '../repositories/TaskRepository';
import CreateTaskService from '../services/CreateTaskService';
import UpdateTaskService from '../services/UpdateTaskService';
import FinishTaskService from '../services/FinishTaskService';
import DeleteTaskService from '../services/DeleteTaskService';

class TasksControllers {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;

    const taskRepository = new TaskRepository();
    const createTask = new CreateTaskService(taskRepository);
    const task = await createTask.execute(title, description);

    return response.status(200).json(task);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const taskRepository = new TaskRepository();
    const tasks = await taskRepository.findAll();
    return response.status(200).json(tasks);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;
    const { id } = request.params;

    const taskRepository = new TaskRepository();
    const updateTask = new UpdateTaskService(taskRepository);

    const task = await updateTask.execute(id, title, description);

    return response.status(200).json(task);
  }

  public async finish(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const taskRepository = new TaskRepository();
    const patchTask = new FinishTaskService(taskRepository);

    const task = await patchTask.execute(id);

    return response.status(200).json(task);
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const taskRepository = new TaskRepository();
    const deleteTask = new DeleteTaskService(taskRepository);
    await deleteTask.execute(id);

    return response.status(204).send();
  }
}

export default TasksControllers;
