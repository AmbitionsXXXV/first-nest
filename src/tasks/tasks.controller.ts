import { CreateTaskDto } from './dto/create-task.dto';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Task } from './task.module';
import { TasksService } from './tasks.service';

@Controller('tasks')
// 路由
export class TasksController {
	constructor(private tasksService: TasksService) {}

	@Get()
	// http://localhost:3000/tasks
	// 请求方法
	getAllTasks(): Task[] {
		return this.tasksService.getAllTasks();
	}

	@Get('/:id')
	// http://localhost:3000/tasks/:uuid
	getTaskById(@Param('id') id: string): Task {
		return this.tasksService.getTaskById(id);
	}

	@Delete('/:id')
	deleteTaskById(@Param('id') id: string): void {
		return this.tasksService.deleteTaskById(id);
	}

	@Post()
	createTask(@Body() createTaskDto: CreateTaskDto): Task {
		return this.tasksService.createTask(createTaskDto);
	}
}
