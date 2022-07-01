import { CreateTodoDto } from './dto/create-todo.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteTodoDto } from './dto/delete-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    findAll(): Promise<{
        name: string;
        id: string;
        todo: import(".prisma/client").Todo[];
    }[]>;
    addUser(user: CreateUserDto): Promise<import(".prisma/client").User>;
    findOne(name: any): Promise<import(".prisma/client").User>;
    delete(id: DeleteTodoDto): Promise<import(".prisma/client").User>;
    addTodo(todo: CreateTodoDto): Promise<import(".prisma/client").Todo>;
    findId(name: any): Promise<{
        id: string;
    }>;
    findTodo(name: any): Promise<{
        id: string;
        content: string;
    }[]>;
    updateTask(todo: UpdateTodoDto): Promise<import(".prisma/client").Todo>;
}
