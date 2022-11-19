import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './task.module';
import { TasksService } from './tasks.service';

@Controller('tasks')
// 路由
export class TasksController {
	constructor(private tasksService: TasksService) {}

	@Get()
	// 请求方法
	getAllTasks(): Task[] {
		return this.tasksService.getAllTasks();
	}

	@Post()
	createTask(
		@Body('title') title: string,
		@Body('description') description: string,
	): Task {
		return this.tasksService.createTask(title, description);
	}
}
