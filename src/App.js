import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import styled from "styled-components";

const StyledDiv = styled.div`

.container {
  border: 1px solid #B19CD9;
  width: 80%;
  margin: 30% auto;
  text-align: center;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5%;
}

`


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  setTodo = (todo) => {
    this.setState({
      todos:[...this.state.todos, todo]
    })
  }

  toggleCompletedOfTodo = (id) => {
    let todos = [...this.state.todos];

    for (let todo of todos) {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
    }

    this.setState({
      todos: todos
    })
  }

  clearCompletedTodos = () => {
    let todos = this.state.todos.filter(todo=>{
      return !todo.completed
    })

    this.setState({
      todos:todos
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
    console.log(this.state.todos)
    return (
      <StyledDiv>
      <div className = "container">
        <h2>Welcome to your Todo App!</h2>
        <TodoList myTodoList={this.state.todos} toggleTodo={this.toggleCompletedOfTodo} />
        <TodoForm
          addTodo={this.setTodo}
          clearCompletedTodos={this.clearCompletedTodos}
        />
      </div>
      </StyledDiv>
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