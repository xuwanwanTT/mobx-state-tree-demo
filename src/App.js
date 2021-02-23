import Header from "./components/Header";
import MainSection from "./components/MainSection";
import './App.css';
import AddTodo from './components/AddTodo.js';
import ShowTodo from './components/ShowTodo.js';
import ChangeTodo from './components/ChangeTodo.js';
import { observer } from 'mobx-react-lite';

const App = ({ store }) => (
  <div>
    {/* <Header addTodo={store.addTodo} /> */}
    {/* <MainSection store={store} /> */}
    <AddTodo addTodo={store.addTodo} />
    <ShowTodo todos={store.filterTodos} />
    <ChangeTodo store={store} />
  </div>
);

export default observer(App);
