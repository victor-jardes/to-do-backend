import React from 'react';
import AddTaskButton from './inputs/buttons/AddTaskButton';
import WriteNewTask from './inputs/text/WriteNewTask';

export default function MainTask() {
  return (
    <div>
      <section>
        <WriteNewTask />
        <AddTaskButton />
      </section>
      <main />
    </div>
  );
}
