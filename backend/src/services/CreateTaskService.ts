import Task from '../models/Task';
import ITaskRepository from '../repositories/ITaskRepository';
import TaskRepository from '../repositories/TaskRepository';

class CreateTaskService {
  private taskRepository: ITaskRepository;

  constructor(userRepository: TaskRepository) {
    this.taskRepository = userRepository;
  }

  public async execute(title: string, description: string): Promise<Task> {
    const task = await this.taskRepository.create(title, description);

    if (!task) {
      throw new Error('Task not created');
    }

    return task;
  }
}

export default CreateTaskService;
