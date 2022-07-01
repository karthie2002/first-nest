import { IsString } from 'class-validator';

export class DeleteTodoDto {
  @IsString()
  readonly id: string;
}
