import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks: any[] = [
        {id: 'asd1', title: 'Task Number One', description: 'Simple Task for my App'},
        {id: 'qwe2', title: 'Go to a Store', description: 'Because I need to buy some Milk'},
        {id: 'zxc3', title: 'Wash a Car', description: 'Ohh, it is Dirty'},
    ];

    /// Get All tasks
    getTasks(): any[] {
        return [...this.tasks];
    }

    /// Get One Task
    getOneTask(id: string): any {
        const task = this.tasks.find(t => t.id === id);
        
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found.`);
        }

        return task;
    }
}
