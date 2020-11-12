import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService : TasksService){}

  @Get()
  getAllTask(){
     return this.taskService.getAllTask();
  }
  

  @Post()
  createTask(
     @Body('title') title : string,
     @Body('description') description : string,
  ) : Promise<Task>{
   return this.taskService.createTask(title, description);
  }


  @Get('/:id')
  getTaskById(@Param('id') id :number){
       return this.taskService.getTaskById(id);
  }

 @Patch('/:id/status')
 updateTaskStatus(
    @Param('id') id: number,
    @Body('status') status : TaskStatus
 ){
      return this.taskService.updateStatus(id, status);

 }

}
