import React from 'react';

import Item from './Item';

export default function List({ tasks, onClickDeleteTask }) {
  return (
    <ol>
      {tasks.map((task) => (
        <Item key={task.id} task={task} onClickDeleteTask={onClickDeleteTask} />
      ))}
    </ol>
  );
}
