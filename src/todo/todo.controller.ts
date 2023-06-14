import { Body, Controller, Get, HttpCode, Post, Delete } from '@nestjs/common';
import { CreateTodoDto } from './dtos/createTodo.dto';
import { ITodo } from './dtos/todo.dto';

let allTodos: ITodo[] = [];

@Controller('todo')
export class TodoController {
  @Get('findAll')
  findAll(): ITodo[] {
    return allTodos;
  }

  @Post('create')
  @HttpCode(200)
  async create(@Body() createTodoDto: CreateTodoDto): Promise<ITodo[]> {
    await allTodos.push({ ...createTodoDto, isFinished: false });

    return [
      {
        id: createTodoDto.id,
        isFinished: false,
        description: createTodoDto.description,
      },
    ] as ITodo[];
  }

  @Get('serch')
  async getUnicItem(id: string): Promise<ITodo[]> {
    const getUnicTask = await allTodos.filter((task) => task.id === id);
    return getUnicTask;
  }

  @Delete('clear')
  async clear(): Promise<ITodo[]> {
    allTodos = [];
    return allTodos;
  }
}
