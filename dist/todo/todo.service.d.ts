import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteTodoDto } from './dto/delete-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        name: string;
        id: string;
        todo: import(".prisma/client").Todo[];
    }[]>;
    addUser(user: CreateUserDto): Promise<import(".prisma/client").User>;
    findOne(name: any): Promise<import(".prisma/client").User>;
    findId(name: any): Promise<{
        id: string;
    }>;
    findTodo(name: any): Promise<{
        id: string;
        content: string;
    }[]>;
    delete(id: DeleteTodoDto): Promise<import(".prisma/client").User>;
    addTodo(todo: CreateTodoDto): Promise<import(".prisma/client").Todo>;
    updateTask(todo: UpdateTodoDto): Promise<import(".prisma/client").Todo>;
}
