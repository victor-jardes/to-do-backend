import { Test } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { CreateTodoDto } from './dtos/createTodo.dto';
import { ITodo } from './dtos/todo.dto';

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

  const todo: CreateTodoDto[] = [
    {
      id: '1',
      description: 'wash to car',
    },
    {
      id: '2',
      description: 'study English',
    },
  ];

  describe('create', () => {
    it('should be able create todo', async () => {
      const result = { ...todo[0], isFinished: false };
      const { description, id, isFinished }: ITodo = result;

      expect(await todoController.create(todo[0])).toContainEqual({
        description,
        id,
        isFinished,
      });
    });
  });

  describe.only('findAll', () => {
    it('shoud return all tasks created', async () => {
      todo.forEach((task) => {
        todoController.create(task);
      });

      const result: ITodo[] = [
        {
          ...todo[0],
          isFinished: false,
        },
        { ...todo[1], isFinished: false },
      ];

      expect(await todoController.findAll()).toMatchObject(result);

      const firstTodoCreated = todoController.findAll()[0];
      const secondTodoCreated = todoController.findAll()[1];

      expect(await todoController.findAll()[0]).toEqual(firstTodoCreated);
      expect(await todoController.findAll()[1]).toEqual(secondTodoCreated);
    });
  });

  describe('`getUnicItem`: search for a particular task', () => {
    it('should be able find my particular task', async () => {
      const result: ITodo[] = [
        {
          ...todo[0],
          isFinished: false,
        },
        { ...todo[1], isFinished: false },
      ];

      const firstItem = result[0];
      const secondItem = result[1];

      todo.forEach((item) => {
        todoController.create(item);
      });

      expect(await todoController.getUnicItem('2')).toContainEqual(secondItem);
      expect(await todoController.getUnicItem('1')).toContainEqual(firstItem);
    });
  });
});
