import { Injectable } from '@nestjs/common';
import { Task } from './task.module';

@Injectable()
export class TasksService {
	private task: Task[] = [];

	public getAllTasks(): Task[] {
		return this.task;
	}
}
