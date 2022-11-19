import { Controller, Get } from '@nestjs/common';
import { Task } from './task.module';
import { TasksService } from './tasks.service';

@Controller('tasks')
// 路由
export class TasksController {
	constructor(private tasksService: TasksService) {}

	@Get()
	getAllTasks(): Task[] {
		return this.tasksService.getAllTasks();
	}
}
