/*
Todo app structure

TodoApp
	- TodoHeader
	- TodoList
    - TodoListItem #1
		- TodoListItem #2
		- ...
		- TodoListItem #N
	- TodoForm
*/
import React, { Component } from 'react';
import TodoApp from './components/TodoApp';
import './App.css';

const todoItems = [];
todoItems.push({index: 1, value: "Học react", done: false});
todoItems.push({index: 2, value: "Đi mua sắm", done: true});
todoItems.push({index: 3, value: "Mua hoa", done: true});

class App extends Component {
  render() {
    return (
      <TodoApp initItems={todoItems}/>
    );
  }
}

export default App;