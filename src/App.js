import React, { Component } from 'react';
import TodoApp from './components/todoApp';
import Addtodos from './components/addTodos';
import './styles.css'

class App extends Component {
  state= {
    todos : [
     { date: '3-Jun-2020',  code: '----',  vidoes: '----',   books: '----', practice: '---',  comment: 'Bad', id: 1},
     { date: '4-Jun-2020',  code: '----',  vidoes: 5,   books: '----', practice: '---',   comment: 'not bad', id: 2},
     { date: '5-Jun-2020',  code: '----',  vidoes: 5,   books: '----', practice: '50%',   comment: 'Good', id: 3}
      ]
}
 addTodo = (todo) =>{
   todo.id = Math.floor(Math.random() * 170);
   //creating a copy of the existing array and adding new todo passed as a prop
   let copyTodos = [...this.state.todos, todo];
   this.setState({
     todos: copyTodos
   })
 }
 deleteData = (id) =>{
 let removedData = this.state.todos.filter(todo =>{
   return todo.id !== id
   
 });
 this.setState({
   todos : removedData
 })
}
  render() {
  return (
    <div className="App">
      <h1>DAIRY HABITS (2)</h1>
      <TodoApp deleteData={this.deleteData} todos={ this.state.todos }/>
      <Addtodos addTodo={this.addTodo}/>
    </div>
  );
 }
}

export default App;
