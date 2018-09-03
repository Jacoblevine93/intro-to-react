import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      todos: [
            {description: 'Walk the cat', isCompleted: true, isKept: true },
            {description: 'Throw the dishes away', isCompleted: false, isKept: true },
            {description: 'Buy new dishes', isCompleted: false, isKept: true },
      ],
      newTodoDescription: ''
      // add back newIsKept:
    };
  }
  handleChange(e) {
     this.setState({ newTodoDescription: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    todo.isKept = false;
    this.setState({ todos: todos });
  }
  
   toggleDelete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isKept = todo.isKept ? false : true;
    this.setState({ todos: todos });
  }

  deleteToDo(e) {
    const todos = this.state.todos;
    todos.filter( todo => todo.isKept = true); 
    this.setState({ todos: todos });
  }
 
  render() {
    return (
      <div className="App">
      <ul>
        { this.state.todos.map( (todo, index) =>
          <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } isKept={ todo.isKept } toggleComplete={ () => this.toggleComplete(index)} toggleDelete={ () => this.toggleDelete(index) } />
        )}
      <form onSubmit={ (e) => this.handleSubmit(e) }>
        <input type="text" value={ this.state.newTodoDescription } /*isKept={ this.state.newIsKept }*/ onChange={ (e) => this.handleChange(e) } />
        <input type="submit" />
        <br></br>
        <input type="button" value="delete" onChange={(e) => this.deleteToDo(e) } />
      </form>
      </ul>
      </div>
    );
  }
}

export default App;
