import { Todo, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        name: string;
        id: string;
        todo: Todo[];
    }[]>;
    addUser(user: any): Promise<User & {
        todo: Todo[];
    }>;
    findOne(name: any): Promise<User>;
    findId(name: any): Promise<{
        id: string;
    }>;
    findTask(name: any): Promise<{
        id: string;
        content: string;
    }[]>;
    delete(id: any): Promise<User>;
    addTodo(todo: Todo): Promise<Todo>;
}
