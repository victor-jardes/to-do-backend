import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('Test inputs in screen', () => {
  describe('Test input For Write', () => {

    it('should exists input for write task', () => {
      render(<App />);

      const getInputForWriteTask = screen.getByLabelText("New Task:");

      expect(getInputForWriteTask)
        .toBeInTheDocument();
      expect(getInputForWriteTask.type).toEqual('text')
    });

    //
  });

  describe('Test add task button', () => {

    it('should exist input for add task in list', () => {
      render(<App />);

      const getInputeForAddTask = screen.getByTestId('button-add-task');
      console.log(getInputeForAddTask.type)

      expect(getInputeForAddTask).toBeInTheDocument();
      expect(getInputeForAddTask.type).toEqual('button')
    });

    //
  });

})

