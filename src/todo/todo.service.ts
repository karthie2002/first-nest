import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteTodoDto } from './dto/delete-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}
  
  async findAll() {
    const userData = await this.prisma.user.findMany({
      select: { name: true, id: true, todo: true },
      orderBy: { name: 'asc' },
    });
    return userData;
  }

  async addUser(user: CreateUserDto) {
    const userData = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
    return userData;
  }

  async findOne(name: any) {
    const userData = await this.prisma.user.findFirst({
      where: name,
    });
    return userData;
  }

  async findId(name: any) {
    const userData = await this.prisma.user.findFirst({
      where: {
        name: name,
      },
      select: {
        id: true,
      },
    });
    return userData;
  }

  async findTodo(id: any) {
    const userData = await this.prisma.todo.findMany({
      where: {
        userId: id,
      },
      select: {
        content: true,
        id: true,
      },
    });
    return userData;
  }

  async delete(id: DeleteTodoDto) {
    const userData = await this.prisma.todo.delete({
      where: id,
    });
    return userData;
  }

  async addTodo(todo: CreateTodoDto) {
    const todoData = await this.prisma.todo.create({
      data: {
        content: todo.content,
        user: {
          connect: {
            id: todo.userId,
          },
        },
      },
    });
    return todoData;
  }

  async updateTask(todo: UpdateTodoDto) {
    const updateUser = await this.prisma.todo.update({
      where: {
        id: todo.id,
      },
      data: {
        content: todo.content,
      },
    });
    return updateUser;
  }
}
