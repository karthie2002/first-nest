"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const create_todo_dto_1 = require("./dto/create-todo.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const delete_todo_dto_1 = require("./dto/delete-todo.dto");
const update_todo_dto_1 = require("./dto/update-todo.dto");
const todo_service_1 = require("./todo.service");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    findAll() {
        return this.todoService.findAll();
    }
    addUser(user) {
        return this.todoService.addUser(user);
    }
    findOne(name) {
        return this.todoService.findOne(name);
    }
    delete(id) {
        return this.todoService.delete(id);
    }
    addTodo(todo) {
        return this.todoService.addTodo(todo);
    }
    findId(name) {
        return this.todoService.findId(name);
    }
    findTodo(name) {
        return this.todoService.findTodo(name);
    }
    updateTask(todo) {
        return this.todoService.updateTask(todo);
    }
};
__decorate([
    (0, common_1.Get)('find'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "findAll", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.ACCEPTED),
    (0, common_1.Post)('addUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "addUser", null);
__decorate([
    (0, common_1.Get)('findOne'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_todo_dto_1.DeleteTodoDto]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('addTodo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_dto_1.CreateTodoDto]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "addTodo", null);
__decorate([
    (0, common_1.Get)('findId/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "findId", null);
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "findTodo", null);
__decorate([
    (0, common_1.Patch)('updateTodo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_todo_dto_1.UpdateTodoDto]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "updateTask", null);
TodoController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map