import { getRepository, Repository } from 'typeorm';
import Task from '../models/Task';
import ITaskRepository from './ITaskRepository';

class TaskRepository implements ITaskRepository {
  private ormRepository: Repository<Task>;

  constructor() {
    this.ormRepository = getRepository(Task);
  }

  public async create(title: string, description: string): Promise<Task> {
    const task = this.ormRepository.create({
      title,
      description,
    });

    await this.ormRepository.save(task);

    return task;
  }

  public async save(task: Task): Promise<Task> {
    return this.ormRepository.save(task);
  }

  public async findAll(): Promise<Task[]> {
    return this.ormRepository.find();
  }
}

export default TaskRepository;
