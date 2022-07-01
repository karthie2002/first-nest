import { Injectable } from '@nestjs/common';
import { Todo, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    const userData = await this.prisma.user.findMany({
      select: { name: true, id: true, todo: true },
      orderBy: { name: 'desc' },
    });
    return userData;
  }

  async addUser(user: User) {
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

  async findTask(name: any) {
    const id: any = await this.findId(name);
    //console.log(id);
    const userData = await this.prisma.todo.findMany({
      where: {
        userId: id.id,
      },
      select: {
        content: true,
        id: true,
      },
    });
    return userData;
  }

  async delete(id: any) {
    const userData = await this.prisma.user.delete({
      where: id,
    });
    return userData;
  }
  async addTodo(todo: Todo) {
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
}
