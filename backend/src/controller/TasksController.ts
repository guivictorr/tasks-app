import { getRepository } from 'typeorm'
import { Tasks } from '../entity/Tasks'
import { Request, Response } from 'express'

export class TasksController {
  async getTasks(request: Request, response: Response) {
    const tasks = await getRepository(Tasks).find()
    return response.json(tasks)
  }

  async saveTask(request: Request, response: Response){
    const task = await getRepository(Tasks).save(request.body)
    response.json(task)
  }

  async getTask(request: Request, response: Response) {
    const { id } = request.params
    const task = await getRepository(Tasks).findOne(id)
    return response.json(task)
  }
  
  async updateTask(request: Request, response: Response){
    const { id } = request.params
    const task = await getRepository(Tasks).update(id, request.body)

    if(task.affected){
      const taskUpdated = await getRepository(Tasks).findOne(id)
      return response.json(taskUpdated)
    }

    return response.status(404).json({message: 'Task not found'})
  }

  async finishedTask(request: Request, response: Response){
    const { id } = request.params
    await getRepository(Tasks).update(id, {
      finished: true
    })

    return response.status(200).json({message: 'Task finished'})
  }

  async deleteTask(request: Request, response: Response){
    const { id } = request.params
    const task = await getRepository(Tasks).delete(id)

    task.affected 
    ? response.json({message: 'Task deleted'}) 
    : response.status(404).json({message: 'Task not found'})
  }
}