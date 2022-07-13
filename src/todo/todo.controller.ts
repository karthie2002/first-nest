import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { CreateTodoDto } from './dto/create-todo.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteTodoDto } from './dto/delete-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@UseGuards(JwtGuard)
@Controller()
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('find')
  findAll() {
    return this.todoService.findAll();
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Post('addUser')
  addUser(@Body() user: CreateUserDto) {
    return this.todoService.addUser(user);
  }

  @Get('findOne')
  findOne(@Body() name: any) {
    return this.todoService.findOne(name);
  }

  @Delete('delete')
  delete(@Body() id: DeleteTodoDto) {
    return this.todoService.delete(id);
  }

  @Post('addTodo')
  addTodo(@Body() todo: CreateTodoDto) {
    return this.todoService.addTodo(todo);
  }

  @Get('findId/:name')
  findId(@Param('name') name: any) {
    return this.todoService.findId(name);
  }

  @Get(':name')
  findTodo(@Param('name') name: any) {
    return this.todoService.findTodo(name);
  }

  @Patch('updateTodo')
  updateTask(@Body() todo: UpdateTodoDto) {
    return this.todoService.updateTask(todo);
  }
}
