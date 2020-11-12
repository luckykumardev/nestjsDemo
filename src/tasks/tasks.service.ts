import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
        ){}

       async getAllTask(){
        return await this.taskRepository.find();
        }

       async createTask(title : string, description :string) : Promise<Task>{
            const task = new Task();
            task.title = title;
            task.description = description;
            task.status = TaskStatus.OPEN;

            await task.save();

            return task;
        }


       async getTaskById(id : number) : Promise<Task>{
           
         return  await this.taskRepository.findOne(id);
        }


       async updateStatus(id : number, status : TaskStatus) : Promise<Task>{
              const task = await this.getTaskById(id);
              task.status =  status;
             await task.save();

               return task;
        }
}
