import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTodoDTO } from './dto/create-todo.dto';

@Controller('tasks')
export class TasksController {

    constructor(
        private tasksService: TasksService
    ) {}

    // Get all tasks
    @Get()
    getTasks() {
        return this.tasksService.getTasks();
    }

    // "path/tasks/create"
    //attaching body for validation
    @Post('create')
    createTask(@Body() body: CreateTodoDTO) {
        return this.tasksService.createTask(body);
    }

    // delete one task by ID
    @Delete('delete/:todoID')
    getOneTask(@Param('todoID') id: string): any {
        return this.tasksService.deleteTask(id);
    }
}
