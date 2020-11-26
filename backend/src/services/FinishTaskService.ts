import Task from '../models/Task';
import ITaskRepository from '../repositories/ITaskRepository';
import TaskRepository from '../repositories/TaskRepository';

class FinishTaskService {
  private taskRepository: ITaskRepository;

  constructor(userRepository: TaskRepository) {
    this.taskRepository = userRepository;
  }

  public async execute(id: string): Promise<Task> {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new Error('Task not found');
    }

    task.finished = true;

    await this.taskRepository.save(task);

    return task;
  }
}

export default FinishTaskService;
