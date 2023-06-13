import { Body, Controller, Get, HttpCode, Post, Delete } from '@nestjs/common';
import { CreateTodoDto } from './dtos/createTodo.dto';

let allTodos: CreateTodoDto[] = [];

@Controller('todo')
export class TodoController {
  @Get('findAll')
  findAll(): CreateTodoDto[] {
    return allTodos;
  }

  @Post('create')
  @HttpCode(200)
  async create(@Body() createTodoDto: CreateTodoDto): Promise<CreateTodoDto> {
    await allTodos.push(createTodoDto);

    const result = {
      id: createTodoDto.id,
      isFinished: createTodoDto.isFinished,
      description: createTodoDto.description,
    };

    return result;
  }

  @Delete('del')
  async clear(): Promise<CreateTodoDto[]> {
    allTodos = [];
    return allTodos;
  }
}
