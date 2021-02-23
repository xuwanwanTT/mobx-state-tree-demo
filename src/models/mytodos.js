import { types } from "mobx-state-tree";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../constants/TodoFilters.js";

const filterType = types.union(...[SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE].map(types.literal));
const filterFn = {
  [SHOW_ALL]: () => true,
  [SHOW_COMPLETED]: s => s.completed,
  [SHOW_ACTIVE]: s => !s.completed,
};

const Todo = types.model({
  text: types.string,
  completed: false,
  id: types.identifierNumber
})
  .actions(self => ({
    toggle() {
      self.completed = !self.completed;
    }
  }));

const TodoStore = types.model({
  todos: types.array(Todo),
  filter: types.optional(filterType, SHOW_ALL)
})
  .views(self => ({
    get filterTodos() {
      return self.todos.filter(filterFn[self.filter]);
    }
  }))
  .actions(self => ({
    addTodo(text) {
      const id = self.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      self.todos.unshift({ id, text });
    },
    setFilter(filter) {
      self.filter = filter;
    }
  }));

export default TodoStore;