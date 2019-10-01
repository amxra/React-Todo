import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm"


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoitem : [
        {

        }
      ]
    }
  }

  setTodo = (todo) => {
    this.setState({
      todos:[...this.state.todos, todo]
    })
  }

  // completed = arr => {
  //   this.setState(currentState => ({
  //     todos: arr
  //   }))
  // }

  //   setFormValue = value => {
  //     this.setState (currentState => ({
  //       formValue: value
  //     }))
  //   }

  //   deleteItem = arr => {
  //     this.setState(currentState => ({
  //       todos: arr
  //     }))
  //   }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.setTodo}/>
        <
      </div>
    );
  }
}

export default App;

// constructor(props){
//   super(props);
//   this.state = {
//     todos: ['a','b','c'],
//     formValue: '',
//   }
// }

// <TodoForm formValue={this.state.formValue} todos={this.state.todos} setTodos={this.setState}/>