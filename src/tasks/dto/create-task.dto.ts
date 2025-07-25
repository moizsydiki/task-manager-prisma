import {
  IsEnum,
  IsUUID,
  IsString,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

import { TaskStatus } from '../../../generated/prisma';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsUUID()
  userId: string;
}
