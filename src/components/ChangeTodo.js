import React from 'react';
import { observer } from 'mobx-react-lite';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../constants/TodoFilters.js";

const ChangeTodo = ({ store }) => {
  return (
    <div>
      <p onClick={() => { store.setFilter(SHOW_ALL) }}>显示全部</p>
      <p onClick={() => { store.setFilter(SHOW_COMPLETED) }}>显示已完成</p>
      <p onClick={() => { store.setFilter(SHOW_ACTIVE) }}>显示未完成</p>
    </div>
  );
};

export default observer(ChangeTodo);