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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TodoService = class TodoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        const userData = await this.prisma.user.findMany({
            select: { name: true, id: true, todo: true },
            orderBy: { name: 'desc' },
        });
        return userData;
    }
    async addUser(user) {
        const userData = await this.prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            },
        });
        return userData;
    }
    async findOne(name) {
        const userData = await this.prisma.user.findFirst({
            where: name,
        });
        return userData;
    }
    async findId(name) {
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
    async findTodo(name) {
        const id = await this.findId(name);
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
    async delete(id) {
        const userData = await this.prisma.user.delete({
            where: id,
        });
        return userData;
    }
    async addTodo(todo) {
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
    async updateTask(todo) {
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
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map