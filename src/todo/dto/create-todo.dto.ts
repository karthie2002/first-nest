import { IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly userId: string;
  @IsString()
  readonly content: string;
}
