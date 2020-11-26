import Task from '../models/Task';

export default interface ITaskRepository {
  create(title: string, description: string): Promise<Task>;
  save(task: Task): Promise<Task>;
  findAll(): Promise<Task[]>;
  findById(id: string): Promise<Task>;
  delete(id: string): void;
}
