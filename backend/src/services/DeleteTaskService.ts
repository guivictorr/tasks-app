import ITaskRepository from '../repositories/ITaskRepository';
import TaskRepository from '../repositories/TaskRepository';

class DeleteTaskService {
  private taskRepository: ITaskRepository;

  constructor(userRepository: TaskRepository) {
    this.taskRepository = userRepository;
  }

  public async execute(id: string): Promise<void> {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new Error('Task not found');
    }

    this.taskRepository.delete(id);
  }
}

export default DeleteTaskService;
