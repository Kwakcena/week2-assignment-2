import React from 'react';

export default function Item({ task: { id, title }, onClickDeleteTask }) {
  return (
    <li>
      {title}
      <button type="button" onClick={() => onClickDeleteTask(id)}>
        Done
      </button>
    </li>
  );
}
