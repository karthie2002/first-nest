import { Todo, User } from '@prisma/client';
import { TodoService } from './todo.service';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    findAll(): Promise<{
        name: string;
        id: string;
        todo: Todo[];
    }[]>;
    addUser(user: User): Promise<User & {
        todo: Todo[];
    }>;
    findOne(name: any): Promise<User>;
    delete(id: any): Promise<User>;
    addTodo(todo: Todo): Promise<Todo>;
    findId(name: any): Promise<{
        id: string;
    }>;
    findTask(name: any): Promise<{
        id: string;
        content: string;
    }[]>;
}
