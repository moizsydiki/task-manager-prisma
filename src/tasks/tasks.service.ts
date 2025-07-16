import { v4 as uuid } from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Task } from './modesl/task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  create(createTaskDto: CreateTaskDto): Task {
    const newTask: Task = {
      id: uuid(),
      ...createTaskDto,
    };

    this.tasks.push(newTask);
    return newTask;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) throw new NotFoundException(`Task with ${id} is not found`);
    return task;
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    const task = this.findOne(id);

    const updatedTask = {
      ...task,
      ...updateTaskDto,
    };

    const index = this.tasks.findIndex((t) => t.id === id);
    this.tasks[index] = updatedTask;

    return updatedTask;
  }

  remove(id: string): void {
    const found = this.findOne(id);
    this.tasks = this.tasks.filter((t) => t.id !== found.id);
  }
}
