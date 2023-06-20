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
    await allTodos.push({ ...createTodoDto, isFinished: false });

    const result: ITask = {
      id: createTodoDto.id,
      isFinished: false,
      description: createTodoDto.description,
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
}
