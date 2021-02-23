import React, { useRef } from 'react';
import { observer } from 'mobx-react-lite';

const AddTodo = ({ addTodo }) => {

  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} />
      <span onClick={() => { addTodo(inputRef.current.value) }}>add</span>
    </>
  );

};

export default observer(AddTodo);