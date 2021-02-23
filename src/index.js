import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import TodoStore from "./models/todos";
import TodoStore from './models/mytodos.js';
import { getSnapshot } from 'mobx-state-tree';

let snapshot = {
  todos: [
    {
      text: "learn Mobx",
      completed: false,
      id: 0
    },
    {
      text: "learn MST",
      completed: false,
      id: 1
    }
  ]
};

const store = (window.store = TodoStore.create(snapshot));

console.log(getSnapshot(store));

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
