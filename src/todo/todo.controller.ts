import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Delete,
  Param,
} from '@nestjs/common';
import { CreateTodoDto } from './dtos/createTodo.dto';
import { ITask } from './interfaces/ITask.interface';

let allTodos: ITask[] = [];

@Controller('todo')
export class TodoController {
  @Get('findAll')
  findAll(): ITask[] {
    return allTodos;
  }

  @Post('create')
  @HttpCode(200)
  async create(@Body() createTodoDto: CreateTodoDto): Promise<ITask> {
    const { id, description, isFinished } = createTodoDto;

    await allTodos.push({ ...createTodoDto });

    const result: ITask = {
      id,
      description,
      isFinished,
    };

    return result;
  }

  @Get('search/:id')
  async getUnicItem(@Param('id') id: string): Promise<ITask[]> {
    const getUnicTask = await allTodos.filter((task) => task.id === id);
    return getUnicTask;
  }

  @Delete('clear')
  async clear(): Promise<ITask[]> {
    allTodos = [];
    return allTodos;
  }

  @Post('/finish/:id')
  async finishedTask(@Param('id') id: string): Promise<string> {
    try {
      const findTask = allTodos.findIndex(({ id: taskId }) => taskId === id);
      allTodos[findTask].isFinished = !allTodos[findTask].isFinished;
      return 'OK';
    } catch (error: any) {
      return 'fail in change `isFinished` value';
    }
  }

  @Delete('/delete/:id')
  async deleteTask(@Param('id') id: string) {
    try {
      const findTask = allTodos.findIndex(({ id: taskId }) => taskId === id);
      allTodos.splice(findTask, 1);
      return 'OK';
    } catch (error) {
      return 'error for delete task';
    }
  }
}
