import { Test } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { CreateTodoDto } from './dtos/createTodo.dto';
import { ITask } from './interfaces/ITask.interface';

describe('TodoControler', () => {
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

  const taskList: CreateTodoDto[] = [
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
    it('should be able create task', async () => {
      const result = { ...taskList[0], isFinished: false };
      const { description, id, isFinished }: ITask = result;

      expect(await todoController.create(taskList[0])).toContainEqual({
        description,
        id,
        isFinished,
      });
    });
  });

  describe('findAll', () => {
    it('shoud return all tasks created', async () => {
      taskList.forEach((task) => {
        todoController.create(task);
      });

      const result: ITask[] = [
        {
          ...taskList[0],
          isFinished: false,
        },
        { ...taskList[1], isFinished: false },
      ];

      expect(await todoController.findAll()).toMatchObject(result);

      const firstTaskCreated = todoController.findAll()[0];
      const secondTaskCreated = todoController.findAll()[1];

      expect(await todoController.findAll()[0]).toEqual(firstTaskCreated);
      expect(await todoController.findAll()[1]).toEqual(secondTaskCreated);
    });
  });

  describe('`getUnicItem`: search for a particular task', () => {
    it('should be able find my particular task', async () => {
      const result: ITask[] = [
        {
          ...taskList[0],
          isFinished: false,
        },
        { ...taskList[1], isFinished: false },
      ];

      const firstItem = result[0];
      const secondItem = result[1];

      taskList.forEach((item) => {
        todoController.create(item);
      });

      expect(await todoController.getUnicItem('2')).toContainEqual(secondItem);
      expect(await todoController.getUnicItem('1')).toContainEqual(firstItem);
    });
  });
});
