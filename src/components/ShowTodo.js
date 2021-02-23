import React from 'react';
import { observer } from 'mobx-react-lite';

const ShowTodo = ({ todos }) => {
  console.log(todos)
  return todos.map((s, i) => (
    <div key={'list' + i}>
      <span>{s.id}</span>
      <span>{s.text}</span>
      <span onClick={() => s.toggle()}>{s.completed.toString()}</span>
    </div>
  ));

};

export default observer(ShowTodo);