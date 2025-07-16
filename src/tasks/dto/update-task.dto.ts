import { IsEnum, IsOptional, IsString } from 'class-validator';

import { TaskStatus } from '../task-status.enum';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
