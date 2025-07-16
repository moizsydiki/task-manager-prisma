import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { TaskStatus } from '../task-status.enum';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;
}
