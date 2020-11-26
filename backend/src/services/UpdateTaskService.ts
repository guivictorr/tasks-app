import Task from '../models/Task';
import ITaskRepository from '../repositories/ITaskRepository';
import TaskRepository from '../repositories/TaskRepository';

class UpdateTaskService {
  private taskRepository: ITaskRepository;

  constructor(userRepository: TaskRepository) {
    this.taskRepository = userRepository;
  }

  public async execute(
    id: string,
    title: string,
    description: string,
  ): Promise<Task> {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new Error('Task not found');
    }

    task.title = title;
    task.description = description;

    await this.taskRepository.save(task);

    return task;
  }
}

export default UpdateTaskService;
