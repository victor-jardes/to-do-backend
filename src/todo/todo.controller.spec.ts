import { Test } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { CreateTodoDto } from './dtos/createTodo.dto';

describe.only('TodoControler', () => {
  let todoController: TodoController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TodoController],
    }).compile();

    todoController = moduleRef.get<TodoController>(TodoController);
  });

  afterEach(async () => {
    todoController.clear();
  });

  describe('create', () => {
    const todo: CreateTodoDto = {
      id: '4',
      description: 'wash to car',
      isFinished: false,
    };

    it('should be able create todo', async () => {
      const firstTodoCreated = todo;
      const result = firstTodoCreated;

      expect(await todoController.create(todo)).toEqual(result);
    });
  });

  describe('findAll', () => {
    const todo: CreateTodoDto[] = [
      {
        id: '1',
        description: 'wash to car',
        isFinished: false,
      },
      {
        id: '2',
        description: 'study English',
        isFinished: true,
      },
    ];

    it('shoud return your task', async () => {
      todo.forEach((task) => {
        todoController.create(task);
      });

      console.log(todoController.findAll());
      expect(await todoController.findAll()).toEqual(todo);

      const firstTodoCreated = todoController.findAll()[0];
      const secondTodoCreated = todoController.findAll()[1];

      expect(await todoController.findAll()[0]).toEqual(firstTodoCreated);
      expect(await todoController.findAll()[1]).toEqual(secondTodoCreated);
    });
  });
});
