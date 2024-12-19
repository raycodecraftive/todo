import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDTO } from './dto/create-todo.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  /// CRUD  - READ
  async getTasks() {
    try {
      // get the user id from the request object
      //
      var userId = '3wdw';

      //async
      const tasks = await this.prisma.todos.findMany({
        // user id eka {x}
        where: {
          userID: userId,
        },
        select: {
          // field name  : true da false da
          id: true,
          title: true,
          user: {
            // field name  : true da false da
            select: {
              id: true,
              email: true,
              fullName: true,
            },
          },
        },
      });

      return tasks;
    } catch (e) {
      throw e;
    }
    // return [...this.tasks];
  }


    /// CRUD  - CREATE
  async createTask(data: CreateTodoDTO) {
    try {
      var userId = '3wdw';

      let todo = await this.prisma.todos.create({
        data: {
          title: data.title,
          completed: data.isCompleted,
          userID: userId,
        },
      });

      return todo;
    } catch (err) {
      throw err;
    }
  }

  /// CRUD  - DELETE
  deleteTask(id: string): any {
    
  }
}
