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
} from '@nestjs/common';
import { Todo, User } from '@prisma/client';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('find')
  findAll() {
    return this.todoService.findAll();
  }
  @HttpCode(HttpStatus.ACCEPTED)
  @Post('me')
  addUser(@Body() user: any) {
    return this.todoService.addUser(user);
  }
  @Get('findOne')
  findOne(@Body() name: any) {
    return this.todoService.findOne(name);
  }
  @Delete('delete')
  delete(@Body() id: any) {
    return this.todoService.delete(id);
  }
  @Post('addTodo')
  addTodo(@Body() todo: Todo) {
    return this.todoService.addTodo(todo);
  }
  @Get('findId/:name')
  findId(@Param('name') name: any) {
    return this.todoService.findId(name);
  }
  @Get(':name')
  findTask(@Param('name') name: any) {
    return this.todoService.findTask(name);
  }
  @Patch('updateTodo')
  updateTask(@Body() todo: any) {
    return this.todoService.updateTask(todo);
  }
}
