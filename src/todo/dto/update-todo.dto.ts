import { IsString } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  readonly id: string;
  @IsString()
  readonly content: string;
}
